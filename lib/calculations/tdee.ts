/**
 * TDEE Calculation Library
 *
 * Pure calculation functions for Total Daily Energy Expenditure.
 * Uses Mifflin-St Jeor equation for BMR with occupation multiplier and steps-driven NEAT model.
 *
 * References:
 * - Mifflin MD, et al. (1990). A new predictive equation for resting energy expenditure in healthy individuals.
 * - TDEE model: BMR × occupation multiplier + NEAT from steps + structured exercise
 */

export type Sex = 'male' | 'female'

export type ActivityLevel = 'sedentary' | 'mixed' | 'on-feet' | 'manual-labor'

export type WorkoutIntensity = 'light' | 'moderate' | 'intense'

export interface TdeeInputs {
  sex: Sex
  age: number // years
  heightCm: number // cm (canonical unit)
  weightKg: number // kg (canonical unit)
  occupation: ActivityLevel
  stepsPerDay: number
  workoutsPerWeek: number
  workoutIntensity: WorkoutIntensity
  workoutDurationHours?: number // default: 0.75 (45 minutes)
  includeTef?: boolean // default: false
}

export interface TdeeBreakdown {
  bmr: number
  neatFromSteps: number
  exerciseCalories: number
  tef: number
  tdee: number
}

export interface TdeeOutputs {
  breakdown: TdeeBreakdown
  maintenanceRange: { min: number; max: number }
  fatLossRange: { min: number; max: number }
  leanGainRange: { min: number; max: number }
}

/**
 * Calculate Basal Metabolic Rate using Mifflin-St Jeor equation
 */
export function calculateBmr(sex: Sex, age: number, heightCm: number, weightKg: number): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return sex === 'male' ? base + 5 : base - 161
}

/**
 * Get occupation activity multiplier
 * This multiplier accounts for daily activity level from job type
 */
export function getOccupationMultiplier(occupation: ActivityLevel): number {
  const mapping: Record<ActivityLevel, number> = {
    'sedentary': 1.1,      // Desk job: 10% increase
    'mixed': 1.15,         // Some walking: 15% increase
    'on-feet': 1.2,        // Retail/nursing: 20% increase
    'manual-labor': 1.25,  // Physical work: 25% increase
  }
  return mapping[occupation]
}

/**
 * Calculate NEAT from steps
 * Uses 0.04 kcal/step constant
 */
export function calculateNeatFromSteps(stepsPerDay: number): number {
  return stepsPerDay * 0.04
}

/**
 * Get MET value for workout intensity
 */
export function getWorkoutMet(intensity: WorkoutIntensity): number {
  const mapping: Record<WorkoutIntensity, number> = {
    'light': 5,
    'moderate': 7,
    'intense': 9,
  }
  return mapping[intensity]
}

/**
 * Calculate calories per workout session
 * Formula: MET x weightKg x durationHours
 */
export function calculateCaloriesPerWorkout(
  intensity: WorkoutIntensity,
  weightKg: number,
  durationHours: number
): number {
  const met = getWorkoutMet(intensity)
  return met * weightKg * durationHours
}

/**
 * Calculate daily average exercise calories from weekly workouts
 */
export function calculateDailyExerciseCalories(
  workoutsPerWeek: number,
  caloriesPerWorkout: number
): number {
  return (workoutsPerWeek * caloriesPerWorkout) / 7
}

/**
 * Calculate TDEE with all components
 */
export function calculateTdee(inputs: TdeeInputs): TdeeBreakdown {
  const {
    sex,
    age,
    heightCm,
    weightKg,
    occupation,
    stepsPerDay,
    workoutsPerWeek,
    workoutIntensity,
    workoutDurationHours = 0.75,
    includeTef = false,
  } = inputs

  // Step 1: BMR (base metabolic rate)
  const baseBmr = calculateBmr(sex, age, heightCm, weightKg)

  // Step 2: Apply occupation multiplier to BMR
  const occupationMultiplier = getOccupationMultiplier(occupation)
  const bmr = baseBmr * occupationMultiplier

  // Step 3: NEAT from steps (all steps count)
  const neatFromSteps = calculateNeatFromSteps(stepsPerDay)

  // Step 4: Structured exercise
  const caloriesPerWorkout = calculateCaloriesPerWorkout(workoutIntensity, weightKg, workoutDurationHours)
  const exerciseCalories = calculateDailyExerciseCalories(workoutsPerWeek, caloriesPerWorkout)

  // Step 5: Combine
  let tdee = bmr + neatFromSteps + exerciseCalories

  // Step 6: Optional TEF
  const tef = includeTef ? tdee * 0.10 : 0
  tdee = tdee + tef

  return {
    bmr: Math.round(bmr),
    neatFromSteps: Math.round(neatFromSteps),
    exerciseCalories: Math.round(exerciseCalories),
    tef: Math.round(tef),
    tdee: Math.round(tdee),
  }
}

/**
 * Round to nearest multiple (for display consistency)
 * MVP uses 25 kcal rounding per PRD
 */
export function roundToNearest(value: number, multiple: number): number {
  return Math.round(value / multiple) * multiple
}

/**
 * Generate TDEE outputs with ranges
 * Maintenance range: +/- 5% of TDEE
 * Fat loss: -15% to -25%
 * Lean gain: +5% to +10%
 */
export function generateTdeeOutputs(inputs: TdeeInputs): TdeeOutputs {
  const breakdown = calculateTdee(inputs)
  const { tdee } = breakdown

  // Maintenance range: +/- 5% (rounded to nearest 25)
  const maintenanceRange = {
    min: roundToNearest(tdee * 0.95, 25),
    max: roundToNearest(tdee * 1.05, 25),
  }

  // Fat loss: -15% to -25%
  const fatLossRange = {
    min: roundToNearest(tdee * 0.75, 25),
    max: roundToNearest(tdee * 0.85, 25),
  }

  // Lean gain: +5% to +10%
  const leanGainRange = {
    min: roundToNearest(tdee * 1.05, 25),
    max: roundToNearest(tdee * 1.10, 25),
  }

  return {
    breakdown,
    maintenanceRange,
    fatLossRange,
    leanGainRange,
  }
}
