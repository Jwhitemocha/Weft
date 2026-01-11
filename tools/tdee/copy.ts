export const tdeeCopy = {
  title: 'TDEE Calculator',
  subtitle: 'Calculate Your Total Daily Energy Expenditure',
  description:
    'Understand how many calories your body burns each day based on your activity level.',

  disclaimer:
    'Educational only. Weft provides general guidance, not medical advice. If you have a medical condition or a history of disordered eating, talk to a qualified professional.',

  // Main educational section
  overview: {
    title: 'Understanding TDEE',
    intro: 'Your Total Daily Energy Expenditure (TDEE) is an estimate of how many calories you burn in a day. Here\'s what goes into it:',
    
    components: [
      {
        title: 'Basal Metabolic Rate (BMR)',
        icon: '🫀',
        description: 'The energy you use while at rest to maintain basic bodily functions like breathing, circulation, and cell production. Based on your age, sex, height, and weight.',
        percentage: '60-70%',
      },
      {
        title: 'Activity Level',
        icon: '🏃',
        description: 'This includes deliberate exercise (Exercise Activity Thermogenesis) and daily activities that burn energy (Non-Exercise Activity Thermogenesis). The more active your lifestyle, the higher your TDEE.',
        percentage: '20-30%',
      },
      {
        title: 'Thermic Effect of Food',
        icon: '🍽️',
        description: 'The energy it takes for your body to digest and process food, which varies based on what you\'re eating. Protein takes more energy to digest than carbs or fats.',
        percentage: '~10%',
      },
    ],
    
    note: 'The exact percentages vary by person, and your TDEE changes day by day based on activity, sleep, stress, and more.',
  },

  howCalculated: {
    title: 'How is TDEE calculated?',
    content: 'TDEE is measured by combining your Basal Metabolic Rate (BMR) with your activity level.',
    formula: 'We use the Mifflin-St Jeor equation to estimate your BMR, then add calories from daily steps (above your occupation baseline) and structured workouts.',
    methods: [
      {
        name: 'Mifflin-St Jeor',
        description: 'The most widely recommended formula for general use. Factors in age, sex, height, and weight.',
      },
      {
        name: 'Katch-McArdle',
        description: 'The only formula that factors in lean body mass—useful if you know your body fat percentage.',
      },
      {
        name: 'Harris-Benedict',
        description: 'One of the oldest equations, still commonly used but slightly less accurate for modern populations.',
      },
    ],
  },

  whyItMatters: {
    title: 'Why TDEE matters for weight',
    content: 'Knowing how many calories you burn daily helps you estimate how much to eat to maintain, lose, or gain weight.',
    points: [
      {
        label: 'Maintain',
        description: 'Eat around your TDEE to stay at your current weight.',
      },
      {
        label: 'Lose',
        description: 'Eat below your TDEE to create a calorie deficit. A 500 cal/day deficit typically results in ~1 lb/week loss.',
      },
      {
        label: 'Gain',
        description: 'Eat above your TDEE to create a surplus for muscle building or weight gain.',
      },
    ],
    caveat: 'Weight management goes beyond calorie counting. Sustainable results require a comprehensive approach that prioritizes exercise, nutrition quality, hydration, and sleep.',
  },

  increaseTdee: {
    title: 'Can you increase your TDEE?',
    intro: 'Yes—through lifestyle changes that support both energy expenditure and overall health.',
    strategies: [
      {
        title: 'Exercise',
        icon: '💪',
        description: 'Regular physical activity, including small movements throughout your day, increases your TDEE. Strength training also builds muscle mass, which contributes to a higher BMR.',
      },
      {
        title: 'Nutrition',
        icon: '🥗',
        description: 'Focus on nutrient-rich foods—whole grains, fruits, vegetables, lean proteins. Protein has a higher thermic effect, meaning it takes more calories to digest.',
      },
      {
        title: 'Daily Movement',
        icon: '🚶',
        description: 'Non-exercise activity (NEAT) like walking, taking stairs, and fidgeting can add hundreds of calories to your daily burn.',
      },
    ],
  },

  tdeeBmi: {
    title: 'TDEE vs. BMI',
    content: 'While TDEE helps with weight management goals, it doesn\'t measure whether you\'re at a healthy weight. Body Mass Index (BMI) provides that context—though it too has limitations and should be considered alongside other health markers.',
  },

  // Legacy explanations (kept for backwards compatibility)
  explanations: {
    whatIsTdee: {
      title: 'What is TDEE?',
      content:
        'TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day. It includes your Basal Metabolic Rate (BMR), the calories you burn through movement and activity (NEAT), and the calories burned during structured exercise.',
    },
    whyRange: {
      title: 'Why a range?',
      content:
        'Calorie calculators provide estimates, not exact numbers. Your actual needs vary day-to-day based on sleep, stress, and activity. Ranges give you flexibility to find what works for your body.',
    },
    howCalculated: {
      title: 'How this was calculated',
      content:
        'We use the Mifflin-St Jeor equation to estimate your BMR. Then we add calories from your daily steps (above your occupation baseline) and structured workouts. Optionally, we can include the Thermic Effect of Food (TEF) if you enable it.',
      breakdown: {
        bmr: 'Your Basal Metabolic Rate: the calories your body burns at rest to maintain basic functions like breathing, circulation, and cell production.',
        neat: 'Non-Exercise Activity Thermogenesis: calories burned through daily movement beyond structured workouts. We calculate this from your steps above your occupation baseline.',
        eat: 'Exercise Activity Thermogenesis: calories burned during deliberate workouts like running, lifting, or sports.',
        tef: 'Thermic Effect of Food (optional): the energy required to digest, absorb, and process nutrients. Typically ~10% of total intake.',
      },
      formulas: {
        bmr: 'Mifflin-St Jeor: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + s (where s = +5 for males, -161 for females)',
        steps: 'NEAT from steps = (your steps - occupation baseline) x 0.04 kcal/step',
        workout: 'Workout calories = MET x weight(kg) x duration(hours), averaged daily',
        tef: 'TEF = TDEE x 0.10 (10%)',
      },
      sources: [
        {
          text: 'Mifflin MD, et al. (1990). A new predictive equation for resting energy expenditure in healthy individuals. American Journal of Clinical Nutrition.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/2305711/',
        },
      ],
    },
  },

  labels: {
    sex: 'Sex',
    age: 'Age',
    height: 'Height',
    weight: 'Weight',
    occupation: 'Occupation Type',
    stepsPerDay: 'Average Daily Steps',
    workoutsPerWeek: 'Workouts per Week',
    workoutIntensity: 'Workout Intensity',
    unitToggle: 'Units',
  },

  options: {
    sex: {
      male: 'Male',
      female: 'Female',
    },
    occupation: {
      sedentary: 'Desk / Sedentary (3,000 steps baseline)',
      mixed: 'Mixed (some walking) (5,000 steps baseline)',
      'on-feet': 'On-feet (retail/service) (8,000 steps baseline)',
      'manual-labor': 'Manual labor (10,000 steps baseline)',
    },
    workoutIntensity: {
      light: 'Light (e.g., walking, yoga)',
      moderate: 'Moderate (e.g., jogging, cycling)',
      intense: 'Intense (e.g., HIIT, heavy lifting)',
    },
  },

  results: {
    maintenance: {
      title: 'Maintenance Calories',
      description: 'Eat within this range to maintain your current weight.',
    },
    fatLoss: {
      title: 'Fat Loss Target',
      description: 'Eat within this range to lose fat at a sustainable pace (15-25% deficit).',
    },
    leanGain: {
      title: 'Lean Gain Target',
      description: 'Eat within this range to support muscle growth (5-10% surplus).',
    },
  },
}
