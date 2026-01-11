import { FoodFactItem, FoodFactCategory } from './foodFacts'

/**
 * Smart fact filtering system
 *
 * Selects 8-12 "best fit" facts for a given TDEE based on:
 * - How "human" the resulting number is (whole numbers, halves, nice ranges)
 * - Category distribution (prioritize eating-out and combos)
 * - Deterministic daily randomness (stable per user per day)
 */

// Session management for deterministic randomness
function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'server-session'

  const key = 'weft-tdee-session-id'
  let sessionId = localStorage.getItem(key)

  if (!sessionId) {
    sessionId = crypto.randomUUID()
    localStorage.setItem(key, sessionId)
  }

  return sessionId
}

// Simple hash function for seeding
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Seeded random number generator
function seededRandom(seed: number) {
  let state = seed
  return function() {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }
}

// Calculate TDEE bucket (rounds to nearest 50)
function getTdeeBucket(tdee: number): number {
  return Math.round(tdee / 50) * 50
}

// Generate deterministic seed for today
function generateDailySeed(tdee: number): number {
  const sessionId = getOrCreateSessionId()
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
  const bucket = getTdeeBucket(tdee)
  const seedString = `${sessionId}-${today}-${bucket}`
  return hashString(seedString)
}

/**
 * Scoring system for "nice human numbers"
 *
 * Returns a score from 0-100 where higher = better
 */
function scoreNiceness(count: number, itemType: FoodFactItem['itemType']): number {
  let score = 0

  // Define ideal ranges by item type
  const ranges = {
    meal: { ideal: [0.6, 2.2], acceptable: [0.4, 2.8], reject: [0, 0.4, 3.0, Infinity] },
    entree: { ideal: [0.8, 3.0], acceptable: [0.5, 4.0], reject: [0, 0.5, 4.0, Infinity] },
    'dessert-drink': { ideal: [1, 6], acceptable: [0.8, 8], reject: [0, 0.6, 10, Infinity] },
    snack: { ideal: [4, 14], acceptable: [3, 20], reject: [0, 3, 25, Infinity] },
    activity: { ideal: [2, 20], acceptable: [1, 30], reject: [0, 0.5, 40, Infinity] }
  }

  const range = ranges[itemType]

  // Reject if outside acceptable range
  if (count < range.reject[1] || count > range.reject[2]) {
    return 0
  }

  // Ideal range gets highest score
  if (count >= range.ideal[0] && count <= range.ideal[1]) {
    score = 100
  }
  // Acceptable range gets medium score
  else if (count >= range.acceptable[0] && count <= range.acceptable[1]) {
    score = 60
  }
  else {
    return 0
  }

  // Bonus for whole numbers or clean halves
  const decimal = count % 1
  if (decimal === 0) {
    score += 15 // Whole number bonus
  } else if (Math.abs(decimal - 0.5) < 0.05) {
    score += 10 // Half number bonus
  }

  // Bonus for "sweet spot" numbers that feel natural
  if ([1, 2, 3, 4, 5, 6, 8, 10, 12].includes(Math.round(count))) {
    score += 5
  }

  // Penalty for too many decimals
  if (decimal !== 0 && Math.abs(decimal - 0.5) > 0.05) {
    const decimalStr = count.toFixed(2)
    if (decimalStr.split('.')[1] !== '00') {
      score -= 20 // Has messy decimal
    }
  }

  return Math.max(0, Math.min(100, score))
}

/**
 * Format display value with smart snapping
 */
export function formatDisplayValue(count: number): string {
  const decimal = count % 1

  // Snap to ½ if very close
  if (count < 0.6 && count >= 0.4) {
    return '~½'
  }

  // Snap to nearest whole if within 0.15
  if (Math.abs(decimal - 0) < 0.15) {
    return Math.round(count).toString()
  }

  // Snap to nearest 0.5 if within 0.12
  if (Math.abs(decimal - 0.5) < 0.12) {
    return (Math.floor(count) + 0.5).toString()
  }

  // For larger numbers, show whole
  if (count > 2.5) {
    return Math.round(count).toString()
  }

  // Otherwise show 1 decimal
  return count.toFixed(1)
}

/**
 * Category quotas for final selection
 */
const CATEGORY_QUOTAS = {
  12: {
    'eating-out': 5,
    'dessert': 2,
    'snacks': 2,
    'protein': 2,
    'contrast': 1,
    'activity': 1
  },
  8: {
    'eating-out': 4,
    'dessert': 2,
    'snacks': 1,
    'protein': 1,
    'contrast': 0,
    'activity': 0
  }
}

interface ScoredFact extends FoodFactItem {
  count: number
  displayValue: string
  score: number
}

/**
 * Main filtering function
 *
 * Returns 8-12 best facts for the given TDEE
 */
export function selectSmartFacts(allFacts: FoodFactItem[], tdee: number): ScoredFact[] {
  // Generate seed for deterministic randomness
  const seed = generateDailySeed(tdee)
  const random = seededRandom(seed)

  // Score all facts
  const scoredFacts: ScoredFact[] = allFacts
    .map(fact => {
      const count = tdee / fact.calories
      const score = scoreNiceness(count, fact.itemType)

      // Apply min/max constraints
      if (fact.minCount && count < fact.minCount) return null
      if (fact.maxCount && count > fact.maxCount) return null

      return {
        ...fact,
        count,
        displayValue: formatDisplayValue(count),
        score
      }
    })
    .filter((f): f is ScoredFact => f !== null && f.score > 0)

  // If we don't have enough facts, return empty (show fallback)
  if (scoredFacts.length < 6) {
    return []
  }

  // Sort by score (high to low)
  scoredFacts.sort((a, b) => b.score - a.score)

  // Try to get 12 facts, fallback to 8
  const targetCount = scoredFacts.length >= 12 ? 12 : 8
  const quota = CATEGORY_QUOTAS[targetCount as 12 | 8]

  // Category-based selection
  const selected: ScoredFact[] = []
  const categoryCounts: Record<FoodFactCategory, number> = {
    'eating-out': 0,
    'dessert': 0,
    'snacks': 0,
    'protein': 0,
    'contrast': 0,
    'activity': 0
  }

  // First pass: fill quotas with highest scoring items
  for (const category of Object.keys(quota) as FoodFactCategory[]) {
    const targetForCategory = quota[category]
    if (targetForCategory === 0) continue

    const categoryFacts = scoredFacts.filter(f => f.category === category)

    // Add some randomness to top choices
    const topCandidates = categoryFacts.slice(0, Math.min(targetForCategory * 2, categoryFacts.length))
    const shuffled = topCandidates.sort(() => random() - 0.5)

    for (let i = 0; i < targetForCategory && i < shuffled.length; i++) {
      selected.push(shuffled[i])
      categoryCounts[category]++
    }
  }

  // Second pass: fill remaining slots with highest scoring facts
  const remaining = scoredFacts.filter(f => !selected.includes(f))
  while (selected.length < targetCount && remaining.length > 0) {
    // Pick from top remaining with slight randomness
    const topRemaining = remaining.slice(0, 5)
    const randomPick = topRemaining[Math.floor(random() * topRemaining.length)]
    selected.push(randomPick)
    remaining.splice(remaining.indexOf(randomPick), 1)
  }

  // Shuffle final selection with seed for variety in display order
  return selected.sort(() => random() - 0.5)
}
