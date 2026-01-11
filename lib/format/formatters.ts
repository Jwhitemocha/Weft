/**
 * Formatting Utilities
 *
 * Pure functions for formatting numbers and ranges for display.
 */

type UnitSystem = 'metric' | 'imperial'

export function formatCalories(kcal: number): string {
  return `${kcal.toLocaleString()} kcal`
}

export function formatRange(min: number, max: number): string {
  return `${min.toLocaleString()}-${max.toLocaleString()} kcal`
}

export function formatHeight(cm: number, unit: UnitSystem): string {
  if (unit === 'metric') {
    return `${cm} cm`
  }

  const totalInches = cm / 2.54
  const feet = Math.floor(totalInches / 12)
  const inches = Math.round(totalInches % 12)
  return `${feet}' ${inches}"`
}

export function formatWeight(kg: number, unit: UnitSystem): string {
  if (unit === 'metric') {
    return `${kg.toFixed(1)} kg`
  }

  const lbs = kg * 2.20462
  return `${Math.round(lbs)} lbs`
}
