/**
 * Unit Conversion Utilities
 *
 * Pure functions for converting between imperial and metric units.
 */

// Height conversions
export function feetInchesToCm(feet: number, inches: number): number {
  const totalInches = feet * 12 + inches
  return totalInches * 2.54
}

export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54
  const feet = Math.floor(totalInches / 12)
  const inches = Math.round(totalInches % 12)
  return { feet, inches }
}

// Weight conversions
export function lbsToKg(lbs: number): number {
  return lbs / 2.20462
}

export function kgToLbs(kg: number): number {
  return kg * 2.20462
}

// Validation helpers
export function isValidHeight(cm: number): boolean {
  return cm >= 120 && cm <= 220
}

export function isValidWeight(kg: number): boolean {
  return kg >= 35 && kg <= 200
}

export function isValidAge(age: number): boolean {
  return age >= 13 && age <= 90
}

export function isValidSteps(steps: number): boolean {
  return steps >= 0 && steps <= 30000
}

export function isValidWorkouts(workouts: number): boolean {
  return workouts >= 0 && workouts <= 14
}
