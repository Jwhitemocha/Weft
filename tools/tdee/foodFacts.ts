import fastFoodData from './fastfood.json'

/**
 * Food fact item type definitions
 *
 * Note: Calorie values are based on typical nutrition listings from major chains
 * and may vary by location, preparation method, and seasonal menu changes.
 */

export type ItemType = 'meal' | 'entree' | 'dessert-drink' | 'snack' | 'activity'

export type FoodFactCategory =
  | 'eating-out'
  | 'snacks'
  | 'contrast'
  | 'protein'
  | 'dessert'
  | 'activity'

export interface FoodFactItem {
  id: string
  kind: 'item' | 'combo'
  label: string
  calories: number
  emoji: string
  category: FoodFactCategory
  insight: string
  brand?: string
  components?: string[] // For combos: what's included

  // Smart filtering constraints
  minCount?: number
  maxCount?: number
  itemType: ItemType
}

// Helper to find items from the JSON
function findItem(company: string, itemName: string): number {
  const companyData = fastFoodData.find(c => c.company === company)
  if (!companyData) throw new Error(`Company ${company} not found`)

  const item = companyData.items.find(i => i.name === itemName)
  if (!item) throw new Error(`Item ${itemName} not found in ${company}`)

  return item.calories
}

// Build comprehensive food facts pool
export function buildFoodFactsPool(): FoodFactItem[] {
  const facts: FoodFactItem[] = []

  // ==========================================
  // EATING OUT - COMBOS (Highest Priority)
  // ==========================================

  facts.push({
    id: 'mcdonalds-big-mac-meal',
    kind: 'combo',
    label: 'Big Mac meals',
    calories: findItem("McDonald's", "Big Mac") +
             findItem("McDonald's", "Medium Fries") +
             findItem("Generic", "Soda Bottle (16oz)"),
    emoji: '🍔',
    category: 'eating-out',
    insight: "One meal out can be your entire day.",
    brand: "McDonald's",
    components: ["Big Mac", "Medium Fries", "Soda"],
    itemType: 'meal',
    minCount: 0.6,
    maxCount: 2.5
  })

  facts.push({
    id: 'innout-double-double-meal',
    kind: 'combo',
    label: 'Double-Double meals',
    calories: findItem("In n Out", "Double-Double") +
             findItem("In n Out", "French Fries") +
             findItem("Generic", "Soda Bottle (16oz)"),
    emoji: '🍔',
    category: 'eating-out',
    insight: "Classic burger joint combo = half your day.",
    brand: "In-N-Out",
    components: ["Double-Double", "Fries", "Soda"],
    itemType: 'meal',
    minCount: 0.6,
    maxCount: 2.5
  })

  facts.push({
    id: 'bk-whopper-meal',
    kind: 'combo',
    label: 'Whopper meals',
    calories: findItem("Burger King", "Whopper with Cheese") +
             findItem("Burger King", "Medium Fries") +
             findItem("Generic", "Soda Bottle (16oz)"),
    emoji: '🍔',
    category: 'eating-out',
    insight: "Restaurant portions are calorie-dense.",
    brand: "Burger King",
    components: ["Whopper with Cheese", "Medium Fries", "Soda"],
    itemType: 'meal',
    minCount: 0.6,
    maxCount: 2.5
  })

  facts.push({
    id: 'mcdonalds-mcnugget-meal',
    kind: 'combo',
    label: 'McNugget meals',
    calories: findItem("McDonald's", "10 Piece McNuggets") +
             findItem("McDonald's", "Medium Fries") +
             findItem("Generic", "Soda Bottle (16oz)"),
    emoji: '🍗',
    category: 'eating-out',
    insight: "Nuggets + sides add up faster than you think.",
    brand: "McDonald's",
    components: ["10 Pc McNuggets", "Medium Fries", "Soda"],
    itemType: 'meal',
    minCount: 0.6,
    maxCount: 2.8
  })

  facts.push({
    id: 'starbucks-breakfast-run',
    kind: 'combo',
    label: 'Starbucks runs',
    calories: findItem("Starbucks", "Bacon Gouda") +
             findItem("Starbucks", "Grande Caramel Macchiato"),
    emoji: '☕',
    category: 'eating-out',
    insight: "Coffee shop breakfast is sneaky high.",
    brand: "Starbucks",
    components: ["Bacon Gouda", "Grande Macchiato"],
    itemType: 'meal',
    minCount: 0.7,
    maxCount: 3.5
  })

  facts.push({
    id: 'late-night-run',
    kind: 'combo',
    label: 'late-night fast food runs',
    calories: findItem("In n Out", "Double-Double") +
             findItem("In n Out", "French Fries") +
             findItem("In n Out", "Chocolate Shake"),
    emoji: '🌙',
    category: 'eating-out',
    insight: "That midnight craving costs more than you think.",
    brand: "In-N-Out",
    components: ["Burger", "Fries", "Shake"],
    itemType: 'meal',
    minCount: 0.5,
    maxCount: 2.2
  })

  facts.push({
    id: 'popeyes-chicken-combo',
    kind: 'combo',
    label: 'fried chicken combos',
    calories: findItem("Popeyes", "Chicken Breast") +
             findItem("Popeyes", "Cajun Fries") +
             findItem("Popeyes", "Biscuit") +
             findItem("Generic", "Soda Bottle (16oz)"),
    emoji: '🍗',
    category: 'eating-out',
    insight: "Fried chicken meals pack serious calories.",
    brand: "Popeyes",
    components: ["Chicken", "Fries", "Biscuit", "Soda"],
    itemType: 'meal',
    minCount: 0.5,
    maxCount: 2.5
  })

  // ==========================================
  // EATING OUT - SINGLE ITEMS
  // ==========================================

  facts.push({
    id: 'bk-bacon-king',
    kind: 'item',
    label: 'Bacon Kings',
    calories: findItem("Burger King", "Bacon King"),
    emoji: '🍔',
    category: 'eating-out',
    insight: "Premium burgers = premium calories.",
    brand: "Burger King",
    itemType: 'entree',
    minCount: 0.8,
    maxCount: 3.0
  })

  facts.push({
    id: 'popeyes-sandwich',
    kind: 'item',
    label: 'Popeyes chicken sandwiches',
    calories: findItem("Popeyes", "Chicken Sandwich"),
    emoji: '🍗',
    category: 'eating-out',
    insight: "Viral sandwiches live up to the hype (in calories).",
    brand: "Popeyes",
    itemType: 'entree',
    minCount: 0.8,
    maxCount: 3.5
  })

  facts.push({
    id: 'mcdonalds-breakfast',
    kind: 'item',
    label: 'Sausage McMuffins',
    calories: findItem("McDonald's", "Sausage McMuffin"),
    emoji: '🥪',
    category: 'eating-out',
    insight: "Breakfast sandwiches aren't always lighter.",
    brand: "McDonald's",
    itemType: 'entree',
    minCount: 1.0,
    maxCount: 4.5
  })

  // ==========================================
  // DESSERTS & DRINKS
  // ==========================================

  facts.push({
    id: 'mcdonalds-mcflurry',
    kind: 'item',
    label: 'small McFlurries',
    calories: findItem("McDonald's", "Small McFlurry"),
    emoji: '🍦',
    category: 'dessert',
    insight: "Desserts pack calories in small portions.",
    brand: "McDonald's",
    itemType: 'dessert-drink',
    minCount: 1.0,
    maxCount: 6.0
  })

  facts.push({
    id: 'innout-shake',
    kind: 'item',
    label: 'chocolate shakes',
    calories: findItem("In n Out", "Chocolate Shake"),
    emoji: '🥤',
    category: 'dessert',
    insight: "Liquid calories don't fill you up.",
    brand: "In-N-Out",
    itemType: 'dessert-drink',
    minCount: 1.0,
    maxCount: 6.0
  })

  facts.push({
    id: 'starbucks-frappuccino',
    kind: 'item',
    label: 'grande frappuccinos',
    calories: findItem("Starbucks", "Grande Caramel Frappucino"),
    emoji: '☕',
    category: 'dessert',
    insight: "Coffee drinks can rival desserts.",
    brand: "Starbucks",
    itemType: 'dessert-drink',
    minCount: 1.0,
    maxCount: 6.0
  })

  facts.push({
    id: 'mcdonalds-sundae',
    kind: 'item',
    label: 'hot fudge sundaes',
    calories: findItem("McDonald's", "Hot Fudge Sundae"),
    emoji: '🍨',
    category: 'dessert',
    insight: "Small treats, big calorie impact.",
    brand: "McDonald's",
    itemType: 'dessert-drink',
    minCount: 1.5,
    maxCount: 8.0
  })

  facts.push({
    id: 'boba-tea',
    kind: 'item',
    label: 'boba milk teas',
    calories: findItem("Generic", "Milk Tea with Boba"),
    emoji: '🧋',
    category: 'dessert',
    insight: "Boba = sugar + more sugar.",
    itemType: 'dessert-drink',
    minCount: 1.0,
    maxCount: 6.0
  })

  // ==========================================
  // SNACKS
  // ==========================================

  facts.push({
    id: 'mcdonalds-nuggets',
    kind: 'item',
    label: 'McNuggets (10 pc)',
    calories: findItem("McDonald's", "10 Piece McNuggets"),
    emoji: '🍗',
    category: 'snacks',
    insight: "Grazing adds up faster than you think.",
    brand: "McDonald's",
    itemType: 'snack',
    minCount: 3,
    maxCount: 15
  })

  facts.push({
    id: 'mcdonalds-cookies',
    kind: 'item',
    label: 'chocolate chip cookies',
    calories: findItem("McDonald's", "Chocolate Chip Cookie"),
    emoji: '🍪',
    category: 'snacks',
    insight: "One cookie leads to three.",
    brand: "McDonald's",
    itemType: 'snack',
    minCount: 4,
    maxCount: 20
  })

  facts.push({
    id: 'mcdonalds-fries',
    kind: 'item',
    label: 'medium fries',
    calories: findItem("McDonald's", "Medium Fries"),
    emoji: '🍟',
    category: 'snacks',
    insight: "Just the fries = a small meal's worth.",
    brand: "McDonald's",
    itemType: 'snack',
    minCount: 3,
    maxCount: 12
  })

  facts.push({
    id: 'popeyes-wings',
    kind: 'item',
    label: 'chicken wings',
    calories: findItem("Popeyes", "Chicken Wing"),
    emoji: '🍗',
    category: 'snacks',
    insight: "Wings disappear fast, calories don't.",
    brand: "Popeyes",
    itemType: 'snack',
    minCount: 5,
    maxCount: 20
  })

  facts.push({
    id: 'bonchon-wings',
    kind: 'item',
    label: 'Korean fried wings',
    calories: findItem("Bonchon", "Soy Garlic Wing"),
    emoji: '🍗',
    category: 'snacks',
    insight: "That sticky sauce adds up.",
    brand: "Bonchon",
    itemType: 'snack',
    minCount: 6,
    maxCount: 25
  })

  facts.push({
    id: 'starbucks-cake-pop',
    kind: 'item',
    label: 'cake pops',
    calories: findItem("Starbucks", "Cake Pop"),
    emoji: '🍭',
    category: 'snacks',
    insight: "Tiny treats aren't calorie-free.",
    brand: "Starbucks",
    itemType: 'snack',
    minCount: 5,
    maxCount: 25
  })

  // ==========================================
  // PROTEIN / HEALTHY CONTRAST
  // ==========================================

  facts.push({
    id: 'grilled-chicken-breast',
    kind: 'item',
    label: 'grilled chicken breasts',
    calories: 165, // Generic grilled chicken breast
    emoji: '🍗',
    category: 'protein',
    insight: "Protein keeps you fuller for longer.",
    itemType: 'entree',
    minCount: 2,
    maxCount: 15
  })

  facts.push({
    id: 'eggs',
    kind: 'item',
    label: 'eggs',
    calories: 70,
    emoji: '🥚',
    category: 'protein',
    insight: "Simple, protein-packed, and affordable.",
    itemType: 'snack',
    minCount: 10,
    maxCount: 50
  })

  facts.push({
    id: 'chicken-salad',
    kind: 'item',
    label: 'grilled chicken salads',
    calories: 250, // Generic chicken salad
    emoji: '🥗',
    category: 'contrast',
    insight: "Volume and protein stretch calories further.",
    itemType: 'entree',
    minCount: 2,
    maxCount: 12
  })

  // ==========================================
  // ACTIVITY
  // ==========================================

  facts.push({
    id: 'walking-miles',
    kind: 'item',
    label: 'miles of walking to burn this',
    calories: 100,
    emoji: '🏃',
    category: 'activity',
    insight: "Movement matters, but so does what you eat.",
    itemType: 'activity',
    minCount: 5,
    maxCount: 40
  })

  facts.push({
    id: 'weightlifting-hours',
    kind: 'item',
    label: 'hours of weightlifting to burn this',
    calories: 400,
    emoji: '🏋️',
    category: 'activity',
    insight: "You can't out-train a bad diet.",
    itemType: 'activity',
    minCount: 1.5,
    maxCount: 8
  })

  return facts
}
