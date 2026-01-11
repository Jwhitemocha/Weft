import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'What is TDEE?',
    description: 'A beginner\'s guide to understanding Total Daily Energy Expenditure and why it matters for fat loss.',
};

export default function WhatIsTdeePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-neutral-border bg-gradient-to-br from-denim-500/10 to-denim-700/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
                <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
                    <Link
                        href="/learn"
                        className="inline-flex items-center text-sm font-medium text-neutral-muted hover:text-denim-500 mb-6 transition-colors"
                    >
                        ← Back to Learn
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-denim-500 to-denim-700">
                        What is TDEE?
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-muted font-light max-w-2xl">
                        A beginner&apos;s guide to understanding Total Daily Energy Expenditure and why it matters for fat loss.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="container max-w-3xl mx-auto px-4 py-12 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        TDEE stands for <strong>Total Daily Energy Expenditure</strong>—the total number of calories your body burns in a day.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        If you understand TDEE, you understand fat loss. It&apos;s that simple.
                    </p>
                </section>

                {/* Why TDEE Matters */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Why TDEE Matters</h2>
                    <p className="text-neutral-muted">Fat loss comes down to energy balance:</p>

                    <div className="grid gap-4">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
                            <span className="text-3xl">📉</span>
                            <div>
                                <p className="font-semibold text-neutral-text">Eat <strong>less</strong> than your TDEE</p>
                                <p className="text-sm text-neutral-muted">→ you lose fat</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800">
                            <span className="text-3xl">📈</span>
                            <div>
                                <p className="font-semibold text-neutral-text">Eat <strong>more</strong> than your TDEE</p>
                                <p className="text-sm text-neutral-muted">→ you gain weight</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
                            <span className="text-3xl">⚖️</span>
                            <div>
                                <p className="font-semibold text-neutral-text">Eat <strong>at</strong> your TDEE</p>
                                <p className="text-sm text-neutral-muted">→ you maintain</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-neutral-muted italic">
                        TDEE is your starting point. Everything else builds from here.
                    </p>
                </section>

                {/* What Makes Up TDEE */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold border-b pb-4">What Makes Up TDEE?</h2>
                    <p className="text-neutral-muted">Your TDEE is made up of four components:</p>

                    {/* BMR */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-denim-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-denim-700">
                                <span className="text-2xl">😴</span> 1. BMR (Basal Metabolic Rate)
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>The calories your body burns at rest just to keep you alive—breathing, circulation, cell production.</p>
                                <div className="bg-denim-500/10 text-denim-700 dark:text-denim-300 p-4 rounded-md">
                                    <p className="font-semibold">BMR typically accounts for 60-70% of your TDEE.</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* NEAT */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-green-700">
                                <span className="text-2xl">🚶</span> 2. NEAT (Non-Exercise Activity Thermogenesis)
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>The calories you burn through daily movement that isn&apos;t deliberate exercise:</p>
                                <ul className="space-y-2 ml-6 list-disc">
                                    <li>Walking</li>
                                    <li>Fidgeting</li>
                                    <li>Standing</li>
                                    <li>Household chores</li>
                                </ul>
                                <div className="bg-green-500/10 text-green-700 dark:text-green-300 p-4 rounded-md text-sm">
                                    <p className="font-semibold mb-2">Why NEAT Matters:</p>
                                    <p>NEAT can vary widely between people. An office worker and a construction worker might have very different NEAT levels.</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* EAT */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-orange-700">
                                <span className="text-2xl">🏋️</span> 3. EAT (Exercise Activity Thermogenesis)
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>Calories burned during deliberate, structured exercise:</p>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <div className="bg-neutral-surface p-3 rounded-lg border border-neutral-border text-center">
                                        <p className="text-sm">Running</p>
                                    </div>
                                    <div className="bg-neutral-surface p-3 rounded-lg border border-neutral-border text-center">
                                        <p className="text-sm">Lifting weights</p>
                                    </div>
                                    <div className="bg-neutral-surface p-3 rounded-lg border border-neutral-border text-center">
                                        <p className="text-sm">Sports</p>
                                    </div>
                                    <div className="bg-neutral-surface p-3 rounded-lg border border-neutral-border text-center">
                                        <p className="text-sm">Cycling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* TEF */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-purple-700">
                                <span className="text-2xl">🔥</span> 4. TEF (Thermic Effect of Food)
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>The energy required to digest, absorb, and process nutrients. Typically around 10% of total intake.</p>
                                <div className="bg-purple-500/10 text-purple-700 dark:text-purple-300 p-4 rounded-md text-sm">
                                    <p>This is why protein has a slight metabolic advantage—it takes more energy to digest than carbs or fats.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Visual Breakdown */}
                <section className="bg-gradient-to-br from-denim-500/10 to-denim-700/10 rounded-2xl p-8 border border-denim-300/20">
                    <h3 className="text-xl font-bold mb-6 text-center">TDEE Component Breakdown</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">BMR (Basal Metabolic Rate)</span>
                                    <span className="text-sm text-neutral-muted">60-70%</span>
                                </div>
                                <div className="w-full bg-neutral-surface rounded-full h-3 border border-neutral-border">
                                    <div className="bg-denim-500 h-full rounded-full" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">NEAT (Daily Movement)</span>
                                    <span className="text-sm text-neutral-muted">15-30%</span>
                                </div>
                                <div className="w-full bg-neutral-surface rounded-full h-3 border border-neutral-border">
                                    <div className="bg-green-500 h-full rounded-full" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">EAT (Structured Exercise)</span>
                                    <span className="text-sm text-neutral-muted">5-10%</span>
                                </div>
                                <div className="w-full bg-neutral-surface rounded-full h-3 border border-neutral-border">
                                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '8%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">TEF (Digestion)</span>
                                    <span className="text-sm text-neutral-muted">~10%</span>
                                </div>
                                <div className="w-full bg-neutral-surface rounded-full h-3 border border-neutral-border">
                                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-neutral-border" />

                {/* How to Use This */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">How to Use This</h2>
                    <div className="space-y-4">
                        {[
                            { num: '1', text: 'Calculate your TDEE', subtext: 'Use our TDEE Calculator as a starting point' },
                            { num: '2', text: 'Track your intake', subtext: "Monitor what you eat for a week to see where you&apos;re starting" },
                            { num: '3', text: 'Adjust based on your goal', subtext: 'Fat loss, maintenance, or muscle gain' },
                            { num: '4', text: 'Monitor and iterate', subtext: 'Track results over time and adjust as needed' },
                        ].map((step) => (
                            <div key={step.num} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-surface border border-neutral-border">
                                <span className="w-8 h-8 rounded-full bg-denim-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {step.num}
                                </span>
                                <div>
                                    <p className="font-medium text-neutral-text">{step.text}</p>
                                    <p className="text-sm text-neutral-muted">{step.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Important Note */}
                <section className="bg-denim-500/5 rounded-2xl p-8 md:p-10 space-y-4">
                    <div className="inline-block p-4 rounded-full bg-background shadow-sm text-4xl mb-2">⚠️</div>
                    <h2 className="text-2xl font-bold">Important to Remember</h2>
                    <blockquote className="text-lg font-medium italic border-l-4 border-denim-500 pl-6">
                        &quot;TDEE is an estimate, not a prescription. Use it as a starting point, then adjust based on real-world results.&quot;
                    </blockquote>
                    <p className="text-neutral-muted">
                        Calculators use population averages. Your actual TDEE might be higher or lower. Track your weight and energy levels for 2-3 weeks, then adjust accordingly.
                    </p>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-8 text-center text-white">
                    <div className="inline-block p-4 rounded-full bg-white/10 text-4xl mb-4">🎯</div>
                    <h2 className="text-2xl font-bold mb-4">Ready to Calculate Yours?</h2>
                    <p className="text-denim-300 mb-6 max-w-lg mx-auto leading-relaxed">
                        Use our TDEE calculator to find your personalized starting point for fat loss, maintenance, or muscle gain.
                    </p>
                    <Link
                        href="/tools/tdee"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-denim-700 shadow-lg transition-all duration-200 hover:bg-denim-fade"
                    >
                        <span>Try the TDEE Calculator</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </section>
            </div>
        </div>
    );
}
