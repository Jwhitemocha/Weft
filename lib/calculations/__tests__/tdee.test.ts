import { describe, it, expect } from 'vitest'
import {
  calculateBmr,
  getOccupationBaselineSteps,
  calculateNeatFromSteps,
  getWorkoutMet,
  calculateCaloriesPerWorkout,
  calculateDailyExerciseCalories,
  calculateTdee,
  roundToNearest,
  generateTdeeOutputs,
} from '../tdee'

describe('TDEE Calculations', () => {
  describe('calculateBmr', () => {
    it('calculates BMR for male correctly', () => {
      // 25yo male, 180cm, 80kg
      const bmr = calculateBmr('male', 25, 180, 80)
      // Expected: 10*80 + 6.25*180 - 5*25 + 5 = 800 + 1125 - 125 + 5 = 1805
      expect(bmr).toBe(1805)
    })

    it('calculates BMR for female correctly', () => {
      // 25yo female, 165cm, 60kg
      const bmr = calculateBmr('female', 25, 165, 60)
      // Expected: 10*60 + 6.25*165 - 5*25 - 161 = 600 + 1031.25 - 125 - 161 = 1345.25
      expect(bmr).toBeCloseTo(1345.25, 1)
    })
  })

  describe('getOccupationBaselineSteps', () => {
    it('returns correct baseline for sedentary', () => {
      expect(getOccupationBaselineSteps('sedentary')).toBe(3000)
    })

    it('returns correct baseline for mixed', () => {
      expect(getOccupationBaselineSteps('mixed')).toBe(5000)
    })

    it('returns correct baseline for on-feet', () => {
      expect(getOccupationBaselineSteps('on-feet')).toBe(8000)
    })

    it('returns correct baseline for manual labor', () => {
      expect(getOccupationBaselineSteps('manual-labor')).toBe(10000)
    })
  })

  describe('calculateNeatFromSteps', () => {
    it('calculates NEAT from excess steps', () => {
      const neat = calculateNeatFromSteps(8000, 3000)
      // 5000 excess steps * 0.04 = 200
      expect(neat).toBe(200)
    })

    it('returns 0 when steps are below baseline', () => {
      const neat = calculateNeatFromSteps(2000, 3000)
      expect(neat).toBe(0)
    })

    it('returns 0 when steps equal baseline', () => {
      const neat = calculateNeatFromSteps(3000, 3000)
      expect(neat).toBe(0)
    })
  })

  describe('getWorkoutMet', () => {
    it('returns correct MET for light intensity', () => {
      expect(getWorkoutMet('light')).toBe(5)
    })

    it('returns correct MET for moderate intensity', () => {
      expect(getWorkoutMet('moderate')).toBe(7)
    })

    it('returns correct MET for intense intensity', () => {
      expect(getWorkoutMet('intense')).toBe(9)
    })
  })

  describe('calculateCaloriesPerWorkout', () => {
    it('calculates workout calories correctly', () => {
      // Moderate (MET 7), 80kg, 0.75 hours
      const kcal = calculateCaloriesPerWorkout('moderate', 80, 0.75)
      // 7 * 80 * 0.75 = 420
      expect(kcal).toBe(420)
    })

    it('calculates for light intensity', () => {
      // Light (MET 5), 70kg, 1 hour
      const kcal = calculateCaloriesPerWorkout('light', 70, 1)
      // 5 * 70 * 1 = 350
      expect(kcal).toBe(350)
    })

    it('calculates for intense intensity', () => {
      // Intense (MET 9), 90kg, 0.5 hours
      const kcal = calculateCaloriesPerWorkout('intense', 90, 0.5)
      // 9 * 90 * 0.5 = 405
      expect(kcal).toBe(405)
    })
  })

  describe('calculateDailyExerciseCalories', () => {
    it('calculates daily average from weekly workouts', () => {
      const daily = calculateDailyExerciseCalories(3, 420)
      // 3 * 420 / 7 = 180
      expect(daily).toBe(180)
    })

    it('returns 0 for zero workouts', () => {
      const daily = calculateDailyExerciseCalories(0, 420)
      expect(daily).toBe(0)
    })
  })

  describe('calculateTdee', () => {
    it('calculates TDEE correctly without TEF', () => {
      const result = calculateTdee({
        sex: 'male',
        age: 25,
        heightCm: 180,
        weightKg: 80,
        occupation: 'sedentary',
        stepsPerDay: 8000,
        workoutsPerWeek: 3,
        workoutIntensity: 'moderate',
        workoutDurationHours: 0.75,
        includeTef: false,
      })

      expect(result.bmr).toBe(1805) // from earlier test
      expect(result.neatFromSteps).toBe(200) // 5000 excess steps
      expect(result.exerciseCalories).toBe(180) // 3 workouts/week at 420 kcal each
      expect(result.tef).toBe(0)
      expect(result.tdee).toBe(2185) // 1805 + 200 + 180
    })

    it('includes TEF when enabled', () => {
      const result = calculateTdee({
        sex: 'male',
        age: 25,
        heightCm: 180,
        weightKg: 80,
        occupation: 'sedentary',
        stepsPerDay: 8000,
        workoutsPerWeek: 3,
        workoutIntensity: 'moderate',
        workoutDurationHours: 0.75,
        includeTef: true,
      })

      const baseTdee = 2185
      const expectedTef = Math.round(baseTdee * 0.10)
      expect(result.tef).toBe(expectedTef)
      expect(result.tdee).toBe(baseTdee + expectedTef)
    })

    it('uses default values for optional parameters', () => {
      const result = calculateTdee({
        sex: 'female',
        age: 30,
        heightCm: 165,
        weightKg: 65,
        occupation: 'mixed',
        stepsPerDay: 7000,
        workoutsPerWeek: 2,
        workoutIntensity: 'light',
      })

      // Should not throw and should return valid values
      expect(result.bmr).toBeGreaterThan(0)
      expect(result.tdee).toBeGreaterThan(result.bmr)
      expect(result.tef).toBe(0) // default is false
    })
  })

  describe('roundToNearest', () => {
    it('rounds to nearest 25', () => {
      expect(roundToNearest(2187, 25)).toBe(2175)
      expect(roundToNearest(2200, 25)).toBe(2200)
      expect(roundToNearest(2213, 25)).toBe(2225)
    })

    it('rounds to nearest 50', () => {
      expect(roundToNearest(2187, 50)).toBe(2200)
      expect(roundToNearest(2224, 50)).toBe(2200)
      expect(roundToNearest(2225, 50)).toBe(2250)
    })

    it('rounds to nearest 10', () => {
      expect(roundToNearest(2184, 10)).toBe(2180)
      expect(roundToNearest(2185, 10)).toBe(2190)
    })
  })

  describe('generateTdeeOutputs', () => {
    it('generates correct output ranges', () => {
      const outputs = generateTdeeOutputs({
        sex: 'male',
        age: 25,
        heightCm: 180,
        weightKg: 80,
        occupation: 'sedentary',
        stepsPerDay: 8000,
        workoutsPerWeek: 3,
        workoutIntensity: 'moderate',
        includeTef: false,
      })

      expect(outputs.breakdown.tdee).toBe(2185)

      // Maintenance: +/- 5% rounded to 25
      expect(outputs.maintenanceRange.min).toBe(roundToNearest(2185 * 0.95, 25))
      expect(outputs.maintenanceRange.max).toBe(roundToNearest(2185 * 1.05, 25))

      // Fat loss: -15% to -25%
      expect(outputs.fatLossRange.min).toBe(roundToNearest(2185 * 0.75, 25))
      expect(outputs.fatLossRange.max).toBe(roundToNearest(2185 * 0.85, 25))

      // Lean gain: +5% to +10%
      expect(outputs.leanGainRange.min).toBe(roundToNearest(2185 * 1.05, 25))
      expect(outputs.leanGainRange.max).toBe(roundToNearest(2185 * 1.10, 25))
    })

    it('returns all required properties', () => {
      const outputs = generateTdeeOutputs({
        sex: 'female',
        age: 30,
        heightCm: 165,
        weightKg: 60,
        occupation: 'on-feet',
        stepsPerDay: 10000,
        workoutsPerWeek: 4,
        workoutIntensity: 'moderate',
      })

      expect(outputs).toHaveProperty('breakdown')
      expect(outputs).toHaveProperty('maintenanceRange')
      expect(outputs).toHaveProperty('fatLossRange')
      expect(outputs).toHaveProperty('leanGainRange')

      expect(outputs.breakdown).toHaveProperty('bmr')
      expect(outputs.breakdown).toHaveProperty('neatFromSteps')
      expect(outputs.breakdown).toHaveProperty('exerciseCalories')
      expect(outputs.breakdown).toHaveProperty('tef')
      expect(outputs.breakdown).toHaveProperty('tdee')

      expect(outputs.maintenanceRange).toHaveProperty('min')
      expect(outputs.maintenanceRange).toHaveProperty('max')
    })
  })
})
