'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { generateTdeeOutputs, type TdeeInputs, type TdeeOutputs } from '@/lib/calculations/tdee'
import { lbsToKg, feetInchesToCm } from '@/lib/format/unitConversions'
import { formatCalories } from '@/lib/format/formatters'
import { tdeeCopy } from './copy'
import { buildFoodFactsPool } from './foodFacts'
import { selectSmartFacts } from './smartFactFilter'
import clsx from 'clsx'

// BMI calculation and recommendation
function calculateBmi(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100
  return weightKg / (heightM * heightM)
}

type WeightStatus = 'underweight' | 'healthy' | 'overweight' | 'obese'

function getWeightStatus(bmi: number): WeightStatus {
  if (bmi < 18.5) {
    return 'underweight'
  }
  if (bmi < 25) {
    return 'healthy'
  }
  if (bmi < 30) {
    return 'overweight'
  }
  return 'obese'
}

function getRecommendation(status: WeightStatus): { goal: Goal; reason: string; emoji: string } {
  switch (status) {
    case 'underweight':
      return {
        goal: 'gain',
        reason: "Your BMI suggests you're underweight. Focus on building healthy weight.",
        emoji: '📈'
      }
    case 'healthy':
      return {
        goal: 'maintain',
        reason: "You're at a healthy weight. Maintain or focus on body recomposition.",
        emoji: '⚖️'
      }
    case 'overweight':
    case 'obese':
      return {
        goal: 'lose',
        reason: "Your BMI suggests you could benefit from fat loss for better health.",
        emoji: '📉'
      }
  }
}

type UnitSystem = 'metric' | 'imperial'
type Sex = 'male' | 'female'
type Occupation = 'sedentary' | 'mixed' | 'on-feet' | 'manual-labor'
type WorkoutIntensity = 'light' | 'moderate' | 'intense'
type Goal = 'lose' | 'maintain' | 'gain'
type WeightChangeRate = 0.5 | 1 | 1.5 | 2

interface FormState {
  sex: Sex
  age: number | ''
  heightFeet: number | ''
  heightInches: number | ''
  heightCm: number | ''
  weight: number | ''
  occupation: Occupation
  stepsPerDay: number
  workoutsPerWeek: number
  workoutIntensity: WorkoutIntensity
}

// Button selection component
function SelectButton<T extends string>({
  value,
  selected,
  onClick,
  children,
  className,
}: {
  value: T
  selected: boolean
  onClick: (value: T) => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={clsx(
        'px-4 py-3 rounded-xl font-medium transition-all duration-200 border-2',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2',
        selected
          ? 'bg-denim-500 text-white border-denim-500 shadow-md scale-[1.02]'
          : 'bg-neutral-surface text-neutral-text border-neutral-border hover:border-denim-300 hover:bg-denim-fade',
        className
      )}
    >
      {children}
    </button>
  )
}

// Number input with stepper
function NumberStepper({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
  emoji,
}: {
  label: string
  value: number | ''
  onChange: (value: number | '') => void
  min: number
  max: number
  step?: number
  unit?: string
  emoji?: string
}) {
  const handleIncrement = () => {
    const current = typeof value === 'number' ? value : min
    onChange(Math.min(max, current + step))
  }

  const handleDecrement = () => {
    const current = typeof value === 'number' ? value : min
    onChange(Math.max(min, current - step))
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-neutral-text">
        {emoji && <span className="mr-2">{emoji}</span>}
        {label}
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleDecrement}
          className="w-10 h-10 rounded-full bg-neutral-surface border border-neutral-border text-xl font-bold text-neutral-muted hover:bg-denim-fade hover:border-denim-300 hover:text-denim-500 transition-all duration-150 flex items-center justify-center"
        >
          −
        </button>
        <div className="flex-1 relative">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
            min={min}
            max={max}
            step={step}
            className="w-full h-12 text-center text-lg font-semibold rounded-xl border border-neutral-border bg-neutral-surface px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          {unit && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-muted">
              {unit}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleIncrement}
          className="w-10 h-10 rounded-full bg-neutral-surface border border-neutral-border text-xl font-bold text-neutral-muted hover:bg-denim-fade hover:border-denim-300 hover:text-denim-500 transition-all duration-150 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  )
}

// Steps selector with distance equivalent
function StepsSelector({
  value,
  onChange,
}: {
  value: number
  onChange: (value: number) => void
}) {
  // Convert steps to miles (2000 steps ≈ 1 mile)
  const stepsToMiles = (steps: number): number => {
    return steps / 2000
  }

  const formatMiles = (miles: number): string => {
    if (miles < 0.1) return '< 0.1'
    if (miles % 1 === 0) return miles.toFixed(0)
    return miles.toFixed(1)
  }

  // Preset step options with activity labels
  const stepPresets = [
    { steps: 2000, label: 'Sedentary', description: 'Mostly sitting', emoji: '🛋️', miles: 1 },
    { steps: 5000, label: 'Light Activity', description: 'Occasional walking', emoji: '🚶', miles: 2.5 },
    { steps: 8000, label: 'Moderate Activity', description: 'Regular movement', emoji: '🚶‍♂️', miles: 4 },
    { steps: 10000, label: 'Active', description: '10K steps daily', emoji: '🏃', miles: 5 },
    { steps: 12000, label: 'Very Active', description: 'Highly active', emoji: '🏃‍♂️', miles: 6 },
    { steps: 15000, label: 'Extremely Active', description: 'Always on the move', emoji: '💨', miles: 7.5 },
  ]

  const currentMiles = stepsToMiles(value)
  const selectedPreset = stepPresets.find((p) => p.steps === value)

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-neutral-text">
        <span className="mr-2">👟</span>
        Daily Steps
      </label>

      {/* Current selection display */}
      <div className="bg-denim-fade/50 rounded-xl p-4 border-2 border-denim-300">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">
              {selectedPreset?.emoji || '👟'}
            </span>
            <div>
              <div className="text-lg font-bold text-denim-700">
                {value.toLocaleString()} steps
              </div>
              <div className="text-sm text-denim-600">
                ≈ {formatMiles(currentMiles)} mile{currentMiles !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preset buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {stepPresets.map((preset) => {
          const isSelected = value === preset.steps
          return (
            <button
              key={preset.steps}
              type="button"
              onClick={() => onChange(preset.steps)}
              className={clsx(
                'px-4 py-3 rounded-xl text-left transition-all duration-200 border-2',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2',
                isSelected
                  ? 'bg-denim-500 text-white border-denim-500 shadow-md scale-[1.02]'
                  : 'bg-neutral-surface text-neutral-text border-neutral-border hover:border-denim-300 hover:bg-denim-fade'
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{preset.emoji}</span>
                  <span className="font-medium text-sm">{preset.label}</span>
                </div>
              </div>
              <div className="text-xs opacity-80">
                {preset.steps.toLocaleString()} steps · {formatMiles(preset.miles)} mi
              </div>
            </button>
          )
        })}
      </div>

      <p className="text-xs text-neutral-muted bg-denim-fade/50 rounded-lg px-3 py-2">
        💡 Don&apos;t have a pedometer? Use the distance guide above, or check your phone&apos;s health app (Apple Health, Google Fit) or fitness tracker for your average daily steps.
      </p>
    </div>
  )
}

function getWorkoutMessage(workouts: number): string {
  if (workouts === 0) {
    return 'Resistance training is recommended for overall health and metabolism.'
  }
  if (workouts === 1) {
    return 'A good start!'
  }
  if (workouts === 2) {
    return 'Building consistency'
  }
  if (workouts <= 4) {
    return 'Solid routine!'
  }
  if (workouts <= 6) {
    return 'Dedicated athlete!'
  }
  return 'Rest is important for muscle recovery and growth.'
}

function WorkoutsSelector({
  value,
  onChange,
}: {
  value: number
  onChange: (value: number) => void
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-neutral-text">
        <span className="mr-2">🏋️</span>
        Workouts per Week
      </label>
      <div className="flex gap-2 flex-wrap">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => onChange(num)}
            className={clsx(
              'w-11 h-11 rounded-xl font-bold transition-all duration-200 border-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2',
              value === num
                ? 'bg-denim-500 text-white border-denim-500 shadow-md scale-105'
                : 'bg-neutral-surface text-neutral-text border-neutral-border hover:border-denim-300'
            )}
          >
            {num}
          </button>
        ))}
      </div>
      <p className="text-sm text-neutral-muted">
        {getWorkoutMessage(value)}
      </p>
    </div>
  )
}

function TdeeFunFacts({ tdee }: { tdee: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Build fact pool and select smart facts
  const facts = useMemo(() => {
    const allFacts = buildFoodFactsPool()
    return selectSmartFacts(allFacts, tdee)
  }, [tdee])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % facts.length)
        setIsVisible(true)
      }, 300) // Wait for fade out before changing content
    }, 4000) // Change every 4 seconds (slightly longer to read insights)

    return () => clearInterval(interval)
  }, [facts.length])

  // Fallback for very low TDEE or when not enough good facts
  if (facts.length === 0) {
    return (
      <div className="mt-5 bg-white/5 rounded-xl p-4 border border-white/10">
        <p className="text-xs text-denim-200 font-semibold mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Your daily energy budget</span>
        </p>
        <div className="bg-white/10 rounded-lg p-5 text-center">
          <div className="text-2xl mb-2">🍽️</div>
          <p className="text-sm text-white/80 leading-relaxed">
            Your TDEE is on the lower end. Focus on nutrient-dense foods that keep you satisfied.
          </p>
        </div>
      </div>
    )
  }

  const currentFact = facts[currentIndex]

  return (
    <div className="mt-5 bg-white/5 rounded-xl p-4 border border-white/10">
      <p className="text-xs text-denim-200 font-semibold mb-3 flex items-center gap-2">
        <span>💡</span>
        <span>Your daily energy budget looks like...</span>
      </p>
      <div
        className={`bg-white/10 rounded-lg p-5 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-3">
          <div className="text-4xl mb-3">{currentFact.emoji}</div>
          <div className="text-3xl font-bold text-white mb-1.5">{currentFact.displayValue}</div>
          <div className="text-sm text-white/80 font-medium">{currentFact.label}</div>
        </div>
        <div className="pt-3 border-t border-white/20">
          <p className="text-xs text-denim-200 text-center italic leading-relaxed">
            {currentFact.insight}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {facts.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-denim-300'
                : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function getGoalButtonLabel(goal: Goal): string {
  switch (goal) {
    case 'lose':
      return 'Lose'
    case 'maintain':
      return 'Maintain'
    case 'gain':
      return 'Gain'
  }
}

function getGoalDescription(goal: Goal, weightChangeRate: WeightChangeRate): string {
  const poundText = weightChangeRate > 1 ? 'pounds' : 'pound'

  switch (goal) {
    case 'lose':
      return `To lose ${weightChangeRate} ${poundText} per week`
    case 'maintain':
      return 'To maintain current weight'
    case 'gain':
      return `To gain ${weightChangeRate} ${poundText} per week`
  }
}

// Calculate extra steps needed to create a deficit instead of cutting calories
function StepsAlternative({
  weightChangeRate,
  currentSteps
}: {
  weightChangeRate: WeightChangeRate
  currentSteps: number
}) {
  // Weekly calorie deficit needed
  const weeklyDeficit = weightChangeRate * 3500
  const dailyDeficit = weeklyDeficit / 7

  // Rough estimate: 0.04-0.05 calories per step (we'll use 0.05)
  const caloriesPerStep = 0.05
  const extraStepsNeeded = Math.round(dailyDeficit / caloriesPerStep)
  const totalSteps = currentSteps + extraStepsNeeded

  // Calculate miles (roughly 2000 steps per mile)
  const extraMiles = (extraStepsNeeded / 2000).toFixed(1)

  return (
    <div className="mt-4 bg-denim-50 dark:bg-denim-900/20 border-2 border-denim-300 dark:border-denim-700 rounded-xl p-4">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">🚶‍♂️</span>
        <div>
          <h4 className="font-semibold text-denim-700 dark:text-denim-300 text-sm mb-1">
            Prefer walking over eating less?
          </h4>
          <p className="text-xs text-denim-600 dark:text-denim-400">
            Instead of cutting {Math.round(dailyDeficit)} calories from your diet, you could eat your full TDEE and walk more!
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-denim-950 rounded-lg p-3 space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-neutral-muted">Current daily steps:</span>
          <span className="font-semibold text-neutral-text">{currentSteps.toLocaleString()}</span>
        </div>
        <div className="flex items-baseline justify-between border-t border-neutral-border pt-2">
          <span className="text-sm text-neutral-muted">Extra steps needed:</span>
          <span className="font-bold text-denim-600 dark:text-denim-400">+{extraStepsNeeded.toLocaleString()}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-neutral-muted">New daily total:</span>
          <span className="font-bold text-lg text-denim-700 dark:text-denim-300">{totalSteps.toLocaleString()}</span>
        </div>
        <div className="mt-2 pt-2 border-t border-neutral-border">
          <p className="text-xs text-neutral-muted">
            That&apos;s about <span className="font-semibold text-denim-600 dark:text-denim-400">{extraMiles} extra miles</span> of walking per day
          </p>
        </div>
      </div>

      <p className="text-xs text-denim-600 dark:text-denim-400 mt-3 italic">
        💡 Pro tip: Walking is low-impact, improves insulin sensitivity, and you can listen to podcasts while doing it!
      </p>
    </div>
  )
}

function ResultsPanel({
  results,
  goal,
  setGoal,
  weightChangeRate,
  setWeightChangeRate,
  isComplete,
  bmi,
  currentSteps,
}: {
  results: TdeeOutputs | null
  goal: Goal
  setGoal: (goal: Goal) => void
  weightChangeRate: WeightChangeRate
  setWeightChangeRate: (rate: WeightChangeRate) => void
  isComplete: boolean
  bmi: number | null
  currentSteps: number
}) {
  const getTargetCalories = () => {
    if (!results) return null
    const { tdee } = results.breakdown

    if (goal === 'maintain') {
      return tdee
    }

    // 1 lb = ~3500 calories, so weekly deficit/surplus needed
    const weeklyChange = weightChangeRate * 3500
    const dailyChange = Math.round(weeklyChange / 7)

    if (goal === 'lose') {
      return Math.max(1200, tdee - dailyChange) // Floor at 1200
    }

    return tdee + dailyChange
  }

  const targetCalories = getTargetCalories()

  // Get recommendation based on BMI
  const recommendation = bmi && isComplete ? getRecommendation(getWeightStatus(bmi)) : null

  return (
    <div className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-5 sm:p-8 text-white shadow-xl">
      {/* Maintenance TDEE */}
      <div className="mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm font-medium text-denim-300 mb-2">Your TDEE</p>
        <p className="text-sm sm:text-base text-white/70 mb-3 hidden sm:block">To maintain current weight</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-5xl font-bold tracking-tight">
            {isComplete && results ? formatCalories(results.breakdown.tdee).replace(' kcal', '') : '— — —'}
          </span>
          <span className="text-base sm:text-xl text-white/50">cal/day</span>
        </div>
      </div>

      {/* Fun Facts */}
      {isComplete && results && <TdeeFunFacts tdee={results.breakdown.tdee} />}

      {/* Goal adjustment */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 text-neutral-text">
        <div className="mb-4 sm:mb-5">
          <p className="font-medium text-sm sm:text-base mb-3">Adjust for your goal</p>
          <div className="flex gap-2">
            {([0.5, 1] as WeightChangeRate[]).map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setWeightChangeRate(rate)}
                className={clsx(
                  'flex-1 px-4 py-2.5 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 border-2',
                  weightChangeRate === rate
                    ? 'bg-denim-500 text-white border-denim-500 shadow-md'
                    : 'bg-white text-neutral-text border-neutral-border hover:border-denim-300 hover:bg-denim-fade'
                )}
              >
                {rate} lb/week
              </button>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        {recommendation && (
          <div className="mb-4 sm:mb-5 bg-denim-fade border-2 border-denim-300 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl sm:text-2xl">{recommendation.emoji}</span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-denim-700 mb-1.5">
                  Recommended: {recommendation.goal.charAt(0).toUpperCase() + recommendation.goal.slice(1)} Weight
                </p>
                <p className="text-xs sm:text-sm text-denim-600 leading-relaxed">{recommendation.reason}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2.5 sm:gap-3 mb-4 sm:mb-5">
          {(['lose', 'maintain', 'gain'] as Goal[]).map((g) => {
            const isRecommended = recommendation?.goal === g
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGoal(g)}
                className={clsx(
                  'flex-1 py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 relative',
                  goal === g
                    ? 'bg-denim-500 text-white shadow-md'
                    : isRecommended
                    ? 'bg-denim-fade text-denim-700 hover:bg-denim-300/30 border-2 border-denim-400'
                    : 'bg-denim-fade text-denim-700 hover:bg-denim-300/30'
                )}
              >
                {isRecommended && goal !== g && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-denim-500 text-white text-xs rounded-full flex items-center justify-center shadow-md">
                    ✓
                  </span>
                )}
                {getGoalButtonLabel(g)}
              </button>
            )
          })}
        </div>

        <div className="pt-4 sm:pt-5 border-t border-neutral-border">
          <p className="text-sm sm:text-base text-neutral-muted mb-3">
            {getGoalDescription(goal, weightChangeRate)}
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-5xl font-bold text-denim-700">
              {isComplete && targetCalories ? formatCalories(targetCalories).replace(' kcal', '') : '— — —'}
            </span>
            <span className="text-base sm:text-xl text-neutral-muted">cal/day</span>
          </div>
        </div>

        {/* Steps Alternative - only show for weight loss */}
        {isComplete && goal === 'lose' && (
          <StepsAlternative
            weightChangeRate={weightChangeRate}
            currentSteps={currentSteps}
          />
        )}
      </div>

      {/* Energy breakdown */}
      {isComplete && results && (
        <details className="mt-5 sm:mt-6 group">
          <summary className="text-sm sm:text-base text-denim-300 cursor-pointer hover:text-white transition-colors flex items-center gap-2 py-2">
            <span>View energy breakdown</span>
            <span className="group-open:rotate-90 transition-transform">→</span>
          </summary>
          <div className="mt-4 space-y-3 text-sm sm:text-base bg-white/10 rounded-xl p-4 sm:p-5">
            <div className="flex justify-between items-center py-1">
              <span className="text-white/70">BMR (Resting)</span>
              <span className="font-medium">{formatCalories(results.breakdown.bmr)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-white/70">Activity (Steps)</span>
              <span className="font-medium">+{formatCalories(results.breakdown.neatFromSteps)}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-white/70">Exercise</span>
              <span className="font-medium">+{formatCalories(results.breakdown.exerciseCalories)}</span>
            </div>
            <div className="flex justify-between items-center pt-3 mt-1 border-t border-white/20">
              <span className="text-white/90 font-medium">Total TDEE</span>
              <span className="font-bold">{formatCalories(results.breakdown.tdee)}</span>
            </div>
          </div>
        </details>
      )}
    </div>
  )
}

export default function TdeeCalculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial')
  const [goal, setGoal] = useState<Goal>('maintain')
  const [weightChangeRate, setWeightChangeRate] = useState<WeightChangeRate>(1)

  const [form, setForm] = useState<FormState>({
    sex: 'female',
    age: '',
    heightFeet: '',
    heightInches: '',
    heightCm: '',
    weight: '',
    occupation: 'sedentary',
    stepsPerDay: 5000,
    workoutsPerWeek: 3,
    workoutIntensity: 'moderate',
  })

  const updateForm = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  // Check if form is complete enough to calculate
  const isFormComplete = useMemo(() => {
    const hasAge = typeof form.age === 'number' && form.age >= 13 && form.age <= 90
    const hasWeight = typeof form.weight === 'number' && form.weight > 0

    if (unitSystem === 'imperial') {
      const hasFeet = typeof form.heightFeet === 'number' && form.heightFeet >= 4 && form.heightFeet <= 7
      const hasInches = typeof form.heightInches === 'number' && form.heightInches >= 0 && form.heightInches <= 11
      return hasAge && hasWeight && hasFeet && hasInches
    }

    const hasCm = typeof form.heightCm === 'number' && form.heightCm >= 120 && form.heightCm <= 220
    return hasAge && hasWeight && hasCm
  }, [form, unitSystem])

  // Calculate results dynamically
  const results = useMemo<TdeeOutputs | null>(() => {
    if (!isFormComplete) return null

    let heightCm: number
    let weightKg: number

    if (unitSystem === 'imperial') {
      heightCm = feetInchesToCm(form.heightFeet as number, form.heightInches as number)
      weightKg = lbsToKg(form.weight as number)
    } else {
      heightCm = form.heightCm as number
      weightKg = form.weight as number
    }

    const inputs: TdeeInputs = {
      sex: form.sex,
      age: form.age as number,
      heightCm,
      weightKg,
      occupation: form.occupation,
      stepsPerDay: form.stepsPerDay,
      workoutsPerWeek: form.workoutsPerWeek,
      workoutIntensity: form.workoutIntensity,
      workoutDurationHours: 0.75,
      includeTef: false,
    }

    return generateTdeeOutputs(inputs)
  }, [form, unitSystem, isFormComplete])

  // Calculate BMI for recommendations
  const bmi = useMemo<number | null>(() => {
    if (!isFormComplete) return null

    let heightCm: number
    let weightKg: number

    if (unitSystem === 'imperial') {
      heightCm = feetInchesToCm(form.heightFeet as number, form.heightInches as number)
      weightKg = lbsToKg(form.weight as number)
    } else {
      heightCm = form.heightCm as number
      weightKg = form.weight as number
    }

    return calculateBmi(heightCm, weightKg)
  }, [form, unitSystem, isFormComplete])

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      {/* Left side - Inputs Card */}
      <div className="bg-neutral-surface rounded-2xl border border-neutral-border shadow-sm p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        {/* Unit toggle */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-text">Your Details</h2>
          <div className="flex bg-white rounded-full p-1 border border-neutral-border">
            <button
              type="button"
              onClick={() => setUnitSystem('imperial')}
              className={clsx(
                'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
                unitSystem === 'imperial'
                  ? 'bg-denim-500 text-white'
                  : 'text-neutral-muted hover:text-neutral-text'
              )}
            >
              Imperial
            </button>
            <button
              type="button"
              onClick={() => setUnitSystem('metric')}
              className={clsx(
                'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
                unitSystem === 'metric'
                  ? 'bg-denim-500 text-white'
                  : 'text-neutral-muted hover:text-neutral-text'
              )}
            >
              Metric
            </button>
          </div>
        </div>

        {/* Sex selection */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-neutral-text">
            <span className="mr-2">👤</span>
            {tdeeCopy.labels.sex}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <SelectButton
              value="female"
              selected={form.sex === 'female'}
              onClick={(v) => updateForm('sex', v)}
            >
              <span className="text-xl mr-2">♀️</span>
              Female
            </SelectButton>
            <SelectButton
              value="male"
              selected={form.sex === 'male'}
              onClick={(v) => updateForm('sex', v)}
            >
              <span className="text-xl mr-2">♂️</span>
              Male
            </SelectButton>
          </div>
        </div>

        {/* Age */}
        <NumberStepper
          label="Age"
          emoji="🎂"
          value={form.age}
          onChange={(v) => updateForm('age', v)}
          min={13}
          max={90}
          unit="years"
        />

        {/* Height */}
        {unitSystem === 'imperial' ? (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-text">
              <span className="mr-2">📏</span>
              Height
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="number"
                  placeholder="Feet"
                  value={form.heightFeet}
                  onChange={(e) => updateForm('heightFeet', e.target.value ? Number(e.target.value) : '')}
                  min={4}
                  max={7}
                  className="w-full h-12 text-center text-lg font-semibold rounded-xl border border-neutral-border bg-neutral-surface px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-muted">ft</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Inches"
                  value={form.heightInches}
                  onChange={(e) => updateForm('heightInches', e.target.value ? Number(e.target.value) : '')}
                  min={0}
                  max={11}
                  className="w-full h-12 text-center text-lg font-semibold rounded-xl border border-neutral-border bg-neutral-surface px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-muted">in</span>
              </div>
            </div>
          </div>
        ) : (
          <NumberStepper
            label="Height"
            emoji="📏"
            value={form.heightCm}
            onChange={(v) => updateForm('heightCm', v)}
            min={120}
            max={220}
            unit="cm"
          />
        )}

        {/* Weight */}
        <NumberStepper
          label="Weight"
          emoji="⚖️"
          value={form.weight}
          onChange={(v) => updateForm('weight', v)}
          min={unitSystem === 'metric' ? 35 : 77}
          max={unitSystem === 'metric' ? 200 : 440}
          unit={unitSystem === 'metric' ? 'kg' : 'lbs'}
        />

        {/* Occupation */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-neutral-text">
            <span className="mr-2">💼</span>
            Daily Activity (Job Type)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SelectButton
              value="sedentary"
              selected={form.occupation === 'sedentary'}
              onClick={(v) => updateForm('occupation', v)}
              className="flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🖥️</span>
                <span className="font-medium text-sm">Desk Job</span>
              </div>
              <span className={clsx('block text-xs', form.occupation === 'sedentary' ? 'text-white/70' : 'text-neutral-muted')}>
                Office work, programming, admin, remote work
              </span>
            </SelectButton>
            <SelectButton
              value="mixed"
              selected={form.occupation === 'mixed'}
              onClick={(v) => updateForm('occupation', v)}
              className="flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🚶</span>
                <span className="font-medium text-sm">Some Walking</span>
              </div>
              <span className={clsx('block text-xs', form.occupation === 'mixed' ? 'text-white/70' : 'text-neutral-muted')}>
                Teacher, manager, receptionist, light meetings
              </span>
            </SelectButton>
            <SelectButton
              value="on-feet"
              selected={form.occupation === 'on-feet'}
              onClick={(v) => updateForm('occupation', v)}
              className="flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🛍️</span>
                <span className="font-medium text-sm">On My Feet</span>
              </div>
              <span className={clsx('block text-xs', form.occupation === 'on-feet' ? 'text-white/70' : 'text-neutral-muted')}>
                Retail, server, nurse, barista, salon
              </span>
            </SelectButton>
            <SelectButton
              value="manual-labor"
              selected={form.occupation === 'manual-labor'}
              onClick={(v) => updateForm('occupation', v)}
              className="flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🔨</span>
                <span className="font-medium text-sm">Physical Work</span>
              </div>
              <span className={clsx('block text-xs', form.occupation === 'manual-labor' ? 'text-white/70' : 'text-neutral-muted')}>
                Construction, warehouse, moving, farming
              </span>
            </SelectButton>
          </div>
        </div>

        {/* Steps selector */}
        <StepsSelector
          value={form.stepsPerDay}
          onChange={(v) => updateForm('stepsPerDay', v)}
        />

        {/* Workouts per week */}
        <WorkoutsSelector
          value={form.workoutsPerWeek}
          onChange={(v) => updateForm('workoutsPerWeek', v)}
        />

        {/* Workout intensity - only show if workouts > 0 */}
        {form.workoutsPerWeek > 0 && (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-text">
              <span className="mr-2">💪</span>
              Workout Intensity
            </label>
            <div className="space-y-2">
            <SelectButton
              value="light"
              selected={form.workoutIntensity === 'light'}
              onClick={(v) => updateForm('workoutIntensity', v)}
              className="w-full flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🧘</span>
                <span className="font-medium text-sm">Light</span>
              </div>
              <span className={clsx('block text-xs', form.workoutIntensity === 'light' ? 'text-white/70' : 'text-neutral-muted')}>
                Walking, yoga, stretching, casual cycling. You can easily hold a conversation.
              </span>
            </SelectButton>
            <SelectButton
              value="moderate"
              selected={form.workoutIntensity === 'moderate'}
              onClick={(v) => updateForm('workoutIntensity', v)}
              className="w-full flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🏃</span>
                <span className="font-medium text-sm">Moderate</span>
              </div>
              <span className={clsx('block text-xs', form.workoutIntensity === 'moderate' ? 'text-white/70' : 'text-neutral-muted')}>
                Jogging, swimming, weight training, cycling. Breathing harder but can still talk.
              </span>
            </SelectButton>
            <SelectButton
              value="intense"
              selected={form.workoutIntensity === 'intense'}
              onClick={(v) => updateForm('workoutIntensity', v)}
              className="w-full flex-col items-start text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🔥</span>
                <span className="font-medium text-sm">Intense</span>
              </div>
              <span className={clsx('block text-xs', form.workoutIntensity === 'intense' ? 'text-white/70' : 'text-neutral-muted')}>
                HIIT, sprints, heavy lifting, CrossFit. Hard to talk, pushing to failure.
              </span>
            </SelectButton>
          </div>
        </div>
        )}

        {/* Disclaimer */}
        <p className="text-sm text-neutral-muted italic pt-4 border-t border-neutral-border">
          {tdeeCopy.disclaimer}
        </p>
      </div>

      {/* Right side - Results Card (sticky on desktop only) */}
      <div className="lg:sticky lg:top-6 space-y-4">
        <ResultsPanel
          results={results}
          goal={goal}
          setGoal={setGoal}
          weightChangeRate={weightChangeRate}
          setWeightChangeRate={setWeightChangeRate}
          isComplete={isFormComplete}
          bmi={bmi}
          currentSteps={form.stepsPerDay}
        />

        {/* Helper text when incomplete */}
        {!isFormComplete && (
          <div className="bg-denim-fade rounded-xl p-4 text-center">
            <p className="text-sm text-denim-700">
              Fill in your details to see your estimated TDEE ✨
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
