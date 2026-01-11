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
