import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Protein Story: Meet Katelynn',
    description: 'Why protein matters more than you think, told through one person\'s journey.',
};

export default function ProteinStoryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-neutral-border bg-denim-fade/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
                <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
                    <Link
                        href="/learn"
                        className="inline-flex items-center text-sm font-medium text-neutral-muted hover:text-denim-500 mb-6 transition-colors"
                    >
                        ← Back to Learn
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-denim-500 to-denim-700">
                        The Protein Story
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-muted font-light max-w-2xl">
                        A story about hunger, muscle loss, and what actually matters when you&apos;re trying to lose fat.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="container max-w-3xl mx-auto px-4 py-12 space-y-16">

                {/* Meet Katelynn */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4">Meet Katelynn.</h2>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        Katelynn has been &quot;eating healthy&quot; for months. She&apos;s tracking calories, hitting the gym 4 days a week, and the scale is finally moving down.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        But something feels... off.
                    </p>
                    <div className="border-l-4 border-denim-500 pl-6 py-2 my-8 italic text-xl text-neutral-text">
                        She&apos;s constantly hungry. Her workouts feel harder. And despite losing 15 pounds, she looks softer, not leaner.
                    </div>
                    <p className="text-lg font-semibold">What&apos;s going wrong?</p>
                </section>

                {/* The Missing Piece */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">The Missing Piece</h2>
                    <p className="text-neutral-muted">Katelynn pulls up her food log. Yesterday looked like this:</p>

                    <Card className="border-l-4 border-l-red-500">
                        <div className="p-6 space-y-3">
                            <div className="space-y-2 text-neutral-muted">
                                <div className="flex justify-between">
                                    <span>• Breakfast: Oatmeal with banana and honey</span>
                                    <span className="font-semibold">8g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>• Lunch: Big salad with vinaigrette</span>
                                    <span className="font-semibold">4g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>• Snack: Apple with peanut butter</span>
                                    <span className="font-semibold">4g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>• Dinner: Pasta with marinara and veggies</span>
                                    <span className="font-semibold">12g</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-border pt-3 mt-3">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Protein:</span>
                                    <span className="text-red-500">28 grams</span>
                                </div>
                            </div>
                            <div className="bg-red-500/10 text-red-700 dark:text-red-300 p-3 rounded-md text-sm font-medium">
                                For someone eating 1,500 calories and working out 4 days a week, that&apos;s nowhere near enough.
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Why Protein Matters */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold border-b pb-4">Why Protein Matters</h2>

                    {/* Prevents Muscle Loss */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-denim-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-denim-700">
                                <span className="text-2xl">💪</span> 1. Protein Prevents Muscle Loss
                            </h3>
                            <div className="space-y-2 text-neutral-muted">
                                <p>When you&apos;re in a calorie deficit, your body needs fuel. It has two options:</p>
                                <ul className="space-y-1 ml-6">
                                    <li className="text-green-600 font-medium">✅ Burn stored fat</li>
                                    <li className="text-red-500 font-medium">❌ Break down muscle for amino acids</li>
                                </ul>
                            </div>
                            <div className="bg-denim-500/10 text-denim-700 dark:text-denim-300 p-3 rounded-md text-sm font-medium">
                                If you don&apos;t eat enough protein, your body chooses option 2. That&apos;s why Katelynn&apos;s losing weight but looking softer.
                            </div>
                        </div>
                    </Card>

                    {/* Keeps You Full */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-orange-700">
                                <span className="text-2xl">🍽️</span> 2. Protein Keeps You Full
                            </h3>
                            <div className="space-y-2 text-neutral-muted">
                                <p>Protein is the most satiating macronutrient. It triggers hormones that signal &quot;I&apos;m full&quot; to your brain.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                                        <p className="font-semibold mb-2">Low Protein Meal:</p>
                                        <p className="text-sm">400-cal oatmeal → hungry in 2 hours</p>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                                        <p className="font-semibold mb-2">High Protein Meal:</p>
                                        <p className="text-sm">400-cal chicken & veggies → full for 4-5 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Thermic Effect */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-green-700">
                                <span className="text-2xl">🔥</span> 3. Protein Has a High Thermic Effect
                            </h3>
                            <div className="space-y-2 text-neutral-muted">
                                <p>Your body burns calories just to digest food (TEF - Thermic Effect of Food).</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                                    <div className="bg-neutral-surface p-4 rounded-lg border border-neutral-border">
                                        <p className="font-semibold text-lg text-green-600">20-30%</p>
                                        <p className="text-sm">Protein</p>
                                    </div>
                                    <div className="bg-neutral-surface p-4 rounded-lg border border-neutral-border">
                                        <p className="font-semibold text-lg text-neutral-muted">5-10%</p>
                                        <p className="text-sm">Carbs</p>
                                    </div>
                                    <div className="bg-neutral-surface p-4 rounded-lg border border-neutral-border">
                                        <p className="font-semibold text-lg text-neutral-muted">0-3%</p>
                                        <p className="text-sm">Fats</p>
                                    </div>
                                </div>
                                <p className="text-sm italic mt-4">If Katelynn eats 100 calories of protein, her body uses 20-30 calories just breaking it down. That&apos;s free calorie burn.</p>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* How Much Protein */}
                <section className="bg-denim-500/5 rounded-2xl p-8 md:p-10 space-y-6">
                    <h2 className="text-2xl font-bold">How Much Does Katelynn Need?</h2>
                    <p className="text-neutral-muted">
                        The research is clear. For someone trying to lose fat while preserving muscle:
                    </p>
                    <div className="text-center py-6">
                        <p className="text-lg font-semibold text-denim-700 mb-4">Aim for</p>
                        <p className="text-4xl font-bold text-denim-500">0.7-1.0g</p>
                        <p className="text-neutral-muted mt-2">per pound of body weight</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                        <div className="bg-background rounded-xl p-6 border border-neutral-border text-center">
                            <p className="text-sm text-neutral-muted mb-2">Minimum</p>
                            <p className="text-3xl font-bold text-neutral-text">105g</p>
                            <p className="text-xs text-neutral-muted mt-2">(0.7 × 150 lbs)</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 border border-denim-300 text-center ring-2 ring-denim-500/20">
                            <p className="text-sm text-denim-700 mb-2 font-semibold">Optimal</p>
                            <p className="text-3xl font-bold text-denim-700">150g</p>
                            <p className="text-xs text-neutral-muted mt-2">(1.0 × 150 lbs)</p>
                        </div>
                    </div>
                    <div className="bg-red-500/10 text-red-700 dark:text-red-300 p-4 rounded-md text-center font-medium">
                        Katelynn was eating 28g. No wonder she felt terrible.
                    </div>
                </section>

                {/* Katelynn's Transformation */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Katelynn&apos;s New Approach</h2>
                    <p className="text-neutral-muted">Here&apos;s what her day looks like now:</p>

                    <Card className="border-l-4 border-l-green-500">
                        <div className="p-6 space-y-3">
                            <div className="space-y-2 text-neutral-muted">
                                <div className="flex justify-between">
                                    <span>• Breakfast: Greek yogurt with berries</span>
                                    <span className="font-semibold text-green-600">20g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>• Lunch: Grilled chicken salad</span>
                                    <span className="font-semibold text-green-600">35g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>• Snack: Protein shake</span>
                                    <span className="font-semibold text-green-600">25g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>• Dinner: Salmon with rice and broccoli</span>
                                    <span className="font-semibold text-green-600">40g</span>
                                </div>
                            </div>
                            <div className="border-t border-neutral-border pt-3 mt-3">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Protein:</span>
                                    <span className="text-green-600">120 grams ✓</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                            <p className="text-green-700 dark:text-green-300 font-medium">✅ No longer constantly hungry</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                            <p className="text-green-700 dark:text-green-300 font-medium">✅ Gym performance improved</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                            <p className="text-green-700 dark:text-green-300 font-medium">✅ Losing fat but keeping muscle</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                            <p className="text-green-700 dark:text-green-300 font-medium">✅ Looks leaner, not just smaller</p>
                        </div>
                    </div>
                </section>

                <hr className="border-neutral-border" />

                {/* Protein Myths */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold">Common Protein Myths</h2>

                    <div className="space-y-6">
                        {[
                            {
                                myth: '"Too much protein damages your kidneys"',
                                truth: 'False. If you have healthy kidneys, high protein intake is safe. This myth comes from studies on people with pre-existing kidney disease.',
                                color: 'red'
                            },
                            {
                                myth: '"You can only absorb 30g of protein per meal"',
                                truth: 'False. Your body will absorb all the protein you eat. The real question is about muscle protein synthesis optimization, which is different.',
                                color: 'orange'
                            },
                            {
                                myth: '"Plant protein is inferior"',
                                truth: 'Partly true. Animal protein has a complete amino acid profile and is more bioavailable. But you can absolutely build muscle on plant protein—you just need to eat more of it and combine sources.',
                                color: 'yellow'
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-neutral-surface border border-neutral-border rounded-xl p-6">
                                <p className="font-bold text-lg mb-2 text-neutral-text">{item.myth}</p>
                                <p className="text-neutral-muted">{item.truth}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Recommendation */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Deep Dive: The Science of Protein</h2>
                    <p className="text-neutral-muted">
                        For a comprehensive breakdown of protein intake, timing, and the latest research, check out this evidence-based video.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-neutral-border shadow-md bg-neutral-surface">
                        <div className="relative aspect-video w-full bg-neutral-200">
                            {/* Placeholder for video - user will add actual YouTube embed */}
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-muted">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">▶</div>
                                    <p className="text-sm">Video embed will go here</p>
                                    <p className="text-xs">(YouTube link to be added)</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-neutral-surface">
                            <h4 className="font-bold text-lg flex items-center gap-2">
                                <span className="text-red-600">▶</span> Protein Intake Explained (Science-Based)
                            </h4>
                            <p className="text-sm text-neutral-muted mt-1">
                                Expert breakdown of protein requirements, timing, and how to optimize your intake.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Wins */}
                <section className="bg-gradient-to-br from-denim-500/10 to-denim-700/10 rounded-2xl p-8 border border-denim-300/20">
                    <h2 className="text-2xl font-bold mb-6">Quick Protein Wins</h2>
                    <div className="space-y-4">
                        {[
                            { icon: '1', text: 'Start every meal with protein - Plan your protein source first, then add carbs and fats around it' },
                            { icon: '2', text: "Protein shakes - An easy 20-30g boost when you&apos;re short" },
                            { icon: '3', text: 'Greek yogurt - High protein, versatile, keeps you full' },
                            { icon: '4', text: 'Lean meats - Chicken breast, turkey, lean beef, fish' },
                            { icon: '5', text: 'Eggs - Cheap, easy, complete protein' },
                        ].map((item) => (
                            <div key={item.icon} className="flex items-start gap-4 bg-background rounded-lg p-4">
                                <span className="w-8 h-8 rounded-full bg-denim-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {item.icon}
                                </span>
                                <span className="font-medium text-neutral-text">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-8 text-center text-white">
                    <div className="inline-block p-4 rounded-full bg-white/10 text-4xl mb-4">💡</div>
                    <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
                    <p className="text-denim-300 mb-6 max-w-lg mx-auto leading-relaxed">
                        Katelynn&apos;s transformation wasn&apos;t about eating less. It was about eating smarter.
                    </p>
                    <blockquote className="text-lg font-medium italic">
                        &quot;Protein isn&apos;t just for bodybuilders. It&apos;s for anyone who wants to lose fat while keeping muscle, stay full longer, and feel better during a diet.&quot;
                    </blockquote>
                    <Link
                        href="/tools/tdee"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-denim-700 shadow-lg transition-all duration-200 hover:bg-denim-fade mt-8"
                    >
                        <span>Calculate Your TDEE</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </section>
            </div>
        </div>
    );
}
