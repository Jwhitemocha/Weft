import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Energy Balance Explained',
    description: 'The simple math behind all weight loss and weight gain.',
};

export default function EnergyBalancePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-neutral-border bg-gradient-to-br from-green-500/10 to-teal-500/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
                <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
                    <Link
                        href="/learn"
                        className="inline-flex items-center text-sm font-medium text-neutral-muted hover:text-denim-500 mb-6 transition-colors"
                    >
                        ← Back to Learn
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                        Energy Balance Explained
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-muted font-light max-w-2xl">
                        The simple math behind all weight loss and weight gain.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="container max-w-3xl mx-auto px-4 py-12 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        It sounds complicated, but it&apos;s just math.
                    </p>
                    <p className="text-xl font-semibold text-neutral-text">
                        <strong>Energy Balance</strong> is the relationship between the energy you feed your body (calories in) and the energy your body uses (calories out).
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        That&apos;s it. That&apos;s the whole game.
                    </p>
                </section>

                {/* The Laws of Physics */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b pb-4">The Laws of Physics</h2>
                    <p className="text-neutral-muted">
                        Your body cannot create energy out of nowhere, and it cannot destroy energy. It can only transfer it.
                    </p>

                    <div className="space-y-4">
                        <Card className="border-l-4 border-l-red-500">
                            <div className="p-6 flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    1
                                </span>
                                <div className="space-y-2">
                                    <p className="font-semibold text-neutral-text">
                                        If you eat <strong>MORE</strong> energy than you burn
                                    </p>
                                    <p className="text-neutral-muted">
                                        Your body stores the extra as fat (or muscle, if you&apos;re training).
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-l-green-500">
                            <div className="p-6 flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    2
                                </span>
                                <div className="space-y-2">
                                    <p className="font-semibold text-neutral-text">
                                        If you eat <strong>LESS</strong> energy than you burn
                                    </p>
                                    <p className="text-neutral-muted">
                                        Your body must burn its own stored energy (fat/muscle) to stay alive.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-l-blue-500">
                            <div className="p-6 flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    3
                                </span>
                                <div className="space-y-2">
                                    <p className="font-semibold text-neutral-text">
                                        If you eat the <strong>SAME</strong> amount
                                    </p>
                                    <p className="text-neutral-muted">
                                        Your weight stays exactly the same.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="bg-denim-500/10 text-denim-700 dark:text-denim-300 p-6 rounded-xl font-medium mt-6">
                        <p className="text-lg">
                            This is why <strong>TDEE</strong> (Total Daily Energy Expenditure) is the most important number in fitness. It tells you exactly where that &quot;balance&quot; point is.
                        </p>
                    </div>
                </section>

                {/* Calories In vs Calories Out */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold">Calories In vs. Calories Out</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Calories In */}
                        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-orange-700">
                                    <span className="text-2xl">🍽️</span> Calories In
                                </h3>
                                <div className="space-y-3 text-neutral-muted">
                                    <p>This is everything you eat and drink.</p>
                                    <ul className="space-y-2 ml-6 list-disc text-sm">
                                        <li>Food</li>
                                        <li>Sodas</li>
                                        <li>Alcohol</li>
                                        <li>Small snacks</li>
                                    </ul>
                                    <div className="bg-orange-500/10 text-orange-700 dark:text-orange-300 p-3 rounded-md text-sm font-medium">
                                        Everything counts. Even that &quot;handful&quot; of nuts.
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Calories Out */}
                        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-teal-700">
                                    <span className="text-2xl">🔥</span> Calories Out
                                </h3>
                                <div className="space-y-3 text-neutral-muted">
                                    <p>This is your <strong>TDEE</strong>, made up of:</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-teal-600">BMR:</span>
                                            <span>Keeping your organs working (coma calories)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-teal-600">NEAT:</span>
                                            <span>Walking, fidgeting, standing, chores</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-teal-600">EAT:</span>
                                            <span>Structured exercise (lifting, running)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-teal-600">TEF:</span>
                                            <span>Digestion energy</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Visual Example */}
                <section className="bg-gradient-to-br from-denim-500/10 to-denim-700/10 rounded-2xl p-8 border border-denim-300/20">
                    <h3 className="text-xl font-bold mb-6 text-center">The Balance Scale</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="space-y-3">
                            <div className="inline-block p-4 rounded-full bg-red-500/10 text-4xl mb-2">⬆️</div>
                            <h4 className="font-bold text-red-600">Calorie Surplus</h4>
                            <p className="text-sm text-neutral-muted">Calories In &gt; Calories Out</p>
                            <div className="bg-background rounded-lg p-3 text-xs font-mono">
                                2,500 in - 2,000 out = +500
                            </div>
                            <p className="text-xs text-neutral-muted">Result: Weight gain</p>
                        </div>

                        <div className="space-y-3">
                            <div className="inline-block p-4 rounded-full bg-blue-500/10 text-4xl mb-2">⚖️</div>
                            <h4 className="font-bold text-blue-600">Maintenance</h4>
                            <p className="text-sm text-neutral-muted">Calories In = Calories Out</p>
                            <div className="bg-background rounded-lg p-3 text-xs font-mono">
                                2,000 in - 2,000 out = 0
                            </div>
                            <p className="text-xs text-neutral-muted">Result: No change</p>
                        </div>

                        <div className="space-y-3">
                            <div className="inline-block p-4 rounded-full bg-green-500/10 text-4xl mb-2">⬇️</div>
                            <h4 className="font-bold text-green-600">Calorie Deficit</h4>
                            <p className="text-sm text-neutral-muted">Calories In &lt; Calories Out</p>
                            <div className="bg-background rounded-lg p-3 text-xs font-mono">
                                1,700 in - 2,000 out = -300
                            </div>
                            <p className="text-xs text-neutral-muted">Result: Fat loss</p>
                        </div>
                    </div>
                </section>

                <hr className="border-neutral-border" />

                {/* The Secret to Fat Loss */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">The &quot;Secret&quot; to Fat Loss</h2>
                    <div className="space-y-4">
                        <Card className="bg-neutral-surface border-2 border-denim-300">
                            <div className="p-6 space-y-4">
                                <p className="text-lg text-neutral-text">
                                    There is <strong>no secret food</strong>. There is <strong>no magic time of day</strong> to eat.
                                </p>
                                <div className="border-t border-neutral-border pt-4">
                                    <p className="text-xl font-bold text-denim-700">
                                        To lose fat, you must be in a <span className="text-denim-500">caloric deficit</span>—eating fewer &quot;Calories In&quot; than your TDEE &quot;Calories Out.&quot;
                                    </p>
                                </div>
                                <p className="text-neutral-muted italic">
                                    When you do this consistently, your body has no choice but to use its fat stores for fuel. The laws of physics guarantee it.
                                </p>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Key Takeaways */}
                <section className="bg-denim-500/5 rounded-2xl p-8 md:p-10 space-y-6">
                    <div className="inline-block p-4 rounded-full bg-background shadow-sm text-4xl mb-2">💡</div>
                    <h2 className="text-2xl font-bold">Key Takeaways</h2>
                    <div className="space-y-4">
                        {[
                            'Energy balance is the foundation of all weight change',
                            'TDEE is your daily calorie burn—the number that matters most',
                            'To lose fat, eat below your TDEE consistently',
                            'To gain muscle, eat above your TDEE with proper training',
                            'To maintain, eat at your TDEE',
                        ].map((takeaway, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                                <p className="text-neutral-text">{takeaway}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Common Myths */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Common Myths Debunked</h2>
                    <div className="space-y-4">
                        {[
                            {
                                myth: '"You need to eat breakfast to boost metabolism"',
                                truth: 'False. Meal timing doesn\'t change energy balance. What matters is total daily intake vs. expenditure.',
                            },
                            {
                                myth: '"Carbs after 6pm make you fat"',
                                truth: 'False. Fat storage is determined by total daily calorie balance, not meal timing.',
                            },
                            {
                                myth: '"You need to cut carbs to lose fat"',
                                truth: 'False. You need to cut total calories. Carbs, protein, and fat all contribute to energy balance.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-neutral-surface border border-neutral-border rounded-xl p-6">
                                <p className="font-bold text-lg mb-2 text-red-600">{item.myth}</p>
                                <p className="text-neutral-muted">{item.truth}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-8 text-center text-white">
                    <div className="inline-block p-4 rounded-full bg-white/10 text-4xl mb-4">🎯</div>
                    <h2 className="text-2xl font-bold mb-4">Start With Your Numbers</h2>
                    <p className="text-denim-300 mb-6 max-w-lg mx-auto leading-relaxed">
                        Understanding energy balance is step one. Step two is finding your personal TDEE so you know exactly how many calories to eat.
                    </p>
                    <Link
                        href="/tools/tdee"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-denim-700 shadow-lg transition-all duration-200 hover:bg-denim-fade"
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
