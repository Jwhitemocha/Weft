import { z } from 'zod'

export const tdeeFormSchema = z.object({
  sex: z.enum(['male', 'female'], {
    message: 'Please select your sex',
  }),
  age: z
    .number({
      message: 'Age must be a number',
    })
    .int('Age must be a whole number')
    .min(13, 'Age must be at least 13')
    .max(90, 'Age must be 90 or less'),
  heightCm: z
    .number({
      message: 'Height must be a number',
    })
    .min(120, 'Height must be at least 120 cm (4\'0")')
    .max(220, 'Height must be 220 cm (7\'3") or less'),
  weightKg: z
    .number({
      message: 'Weight must be a number',
    })
    .min(35, 'Weight must be at least 35 kg (77 lbs)')
    .max(200, 'Weight must be 200 kg (440 lbs) or less'),
  occupation: z.enum(['sedentary', 'mixed', 'on-feet', 'manual-labor'], {
    message: 'Please select your occupation type',
  }),
  stepsPerDay: z
    .number({
      message: 'Steps must be a number',
    })
    .int('Steps must be a whole number')
    .min(0, 'Steps cannot be negative')
    .max(30000, 'Steps must be 30,000 or less'),
  workoutsPerWeek: z
    .number({
      message: 'Workouts must be a number',
    })
    .int('Workouts must be a whole number')
    .min(0, 'Workouts cannot be negative')
    .max(14, 'Workouts must be 14 or less'),
  workoutIntensity: z.enum(['light', 'moderate', 'intense'], {
    message: 'Please select workout intensity',
  }),
  // Advanced toggles
  workoutDurationHours: z.number().min(0.25).max(3).optional(),
  includeTef: z.boolean().optional(),
})

export type TdeeFormData = z.infer<typeof tdeeFormSchema>

/**
 * Fast food nutrition data schema
 *
 * Designed for scalability with weight-based scaling for meal planning.
 * Base values are stored per serving/item, with serving weight for scaling calculations.
 *
 * Usage:
 * - Base values (calories, macros) represent the nutrition for one serving/item
 * - servingWeight (grams) defines the weight of that serving
 * - To scale: perGram = baseValue / servingWeight, then scaledValue = perGram * desiredWeight
 * - Supports both discrete items (pieces) and weight-based items (grams)
 */
export const fastFoodItemSchema = z.object({
  name: z.string(),
  calories: z.number().int().positive(),
  type: z.enum(['food', 'drink']),
  
  // Base macros (per serving/item, in grams) - optional for gradual data entry
  protein: z.number().nonnegative().optional(),
  carbs: z.number().nonnegative().optional(),
  fats: z.number().nonnegative().optional(),
  
  // Serving weight in grams - optional but REQUIRED for meal planning weight calculations
  // Represents the weight of one serving/item (what the base nutrition values above represent)
  // Use case: scale by weight for meal planning (perGram = baseValue / servingWeight)
  servingWeight: z.number().positive().optional(),
})

export const fastFoodCompanySchema = z.object({
  company: z.string(),
  items: z.array(fastFoodItemSchema),
})

export const fastFoodDataSchema = z.array(fastFoodCompanySchema)

// TypeScript types inferred from schemas
export type FastFoodItem = z.infer<typeof fastFoodItemSchema>
export type FastFoodCompany = z.infer<typeof fastFoodCompanySchema>
export type FastFoodData = z.infer<typeof fastFoodDataSchema>
