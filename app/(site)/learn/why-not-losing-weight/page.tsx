import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Why You\'re Not Losing Weight: Stephen\'s Story',
    description: 'The hidden reasons your scale won\'t budge (and what to do about it).',
};

export default function WhyNotLosingWeightPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-neutral-border bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
                <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
                    <Link
                        href="/learn"
                        className="inline-flex items-center text-sm font-medium text-neutral-muted hover:text-denim-500 mb-6 transition-colors"
                    >
                        ← Back to Learn
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                        Why You&apos;re Not Losing Weight
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-muted font-light max-w-2xl">
                        The frustrating truth about plateaus, hidden calories, and what to do when the scale won&apos;t budge.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="container max-w-3xl mx-auto px-4 py-12 space-y-16">

                {/* Meet Stephen */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4">Meet Stephen.</h2>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        Stephen has been &quot;doing everything right&quot; for 6 weeks. He&apos;s tracking calories, going to the gym, avoiding junk food.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        For the first 3 weeks, the scale dropped consistently. He lost 8 pounds and felt unstoppable.
                    </p>
                    <div className="border-l-4 border-red-500 pl-6 py-2 my-8 italic text-xl text-neutral-text">
                        Then... nothing. For 3 weeks, the scale hasn&apos;t moved. Not even half a pound.
                    </div>
                    <p className="text-lg font-semibold text-red-600">What&apos;s happening?</p>
                </section>

                {/* The 5 Hidden Reasons */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold border-b pb-4">The 5 Hidden Reasons Your Scale Won&apos;t Budge</h2>

                    {/* Reason 1: You're Eating More Than You Think */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-red-700">
                                <span className="text-2xl">🍽️</span> 1. You&apos;re Eating More Than You Think
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>Stephen tracks his calories religiously. Or so he thinks.</p>
                                <p className="font-semibold">Here&apos;s what he&apos;s missing:</p>
                                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg space-y-2">
                                    <p className="text-sm">• Coffee creamer: &quot;Just a splash&quot; = 50-100 extra calories</p>
                                    <p className="text-sm">• Cooking oil: &quot;A little olive oil&quot; = 120 calories per tablespoon</p>
                                    <p className="text-sm">• Weekend meals: &quot;I don&apos;t track on weekends&quot; = 500+ extra calories per day</p>
                                    <p className="text-sm">• Bites and tastes: &quot;Just trying my kid&apos;s food&quot; = 200-300 calories</p>
                                </div>
                                <p className="font-semibold text-neutral-text">The math:</p>
                                <p>Stephen thinks he&apos;s eating 2,000 calories. He&apos;s actually eating 2,500-2,700.</p>
                            </div>
                            <div className="bg-red-500/10 text-red-700 dark:text-red-300 p-4 rounded-md font-medium">
                                <p className="font-bold mb-2">The Fix:</p>
                                <p className="text-sm">Track everything for 2 weeks. Cooking oils, condiments, weekend meals, everything. You might be shocked.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Reason 2: Your Metabolism Adapted */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-orange-700">
                                <span className="text-2xl">⚡</span> 2. Your Metabolism Adapted
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>Stephen lost 8 pounds. That&apos;s great! But here&apos;s what happened:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-neutral-surface p-4 rounded-lg border border-neutral-border">
                                        <p className="font-semibold mb-2">Week 1:</p>
                                        <p className="text-sm">TDEE: 2,400 calories</p>
                                        <p className="text-sm">Eating: 1,900 calories</p>
                                        <p className="text-sm font-bold text-green-600">Deficit: 500 cal/day ✓</p>
                                    </div>
                                    <div className="bg-neutral-surface p-4 rounded-lg border border-neutral-border">
                                        <p className="font-semibold mb-2">Week 6:</p>
                                        <p className="text-sm">TDEE: 2,100 calories (lighter body)</p>
                                        <p className="text-sm">Eating: 1,900 calories</p>
                                        <p className="text-sm font-bold text-orange-600">Deficit: 200 cal/day</p>
                                    </div>
                                </div>
                                <p className="text-sm">When you lose weight, your body needs fewer calories. Your TDEE drops. What was a 500-calorie deficit is now only 200.</p>
                            </div>
                            <div className="bg-orange-500/10 text-orange-700 dark:text-orange-300 p-4 rounded-md font-medium">
                                <p className="font-bold mb-2">The Fix:</p>
                                <p className="text-sm">Recalculate your TDEE every 10-15 pounds lost and adjust your calorie target accordingly.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Reason 3: Water Weight is Masking Fat Loss */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-blue-700">
                                <span className="text-2xl">💧</span> 3. Water Weight is Masking Fat Loss
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>Stephen might actually be losing fat, but water retention is hiding it.</p>
                                <p className="font-semibold">Common culprits:</p>
                                <ul className="space-y-2 ml-6 list-disc">
                                    <li>High sodium meal (restaurant food, processed foods)</li>
                                    <li>New workout routine (muscles hold water for repair)</li>
                                    <li>Stress (cortisol increases water retention)</li>
                                    <li>Not enough sleep</li>
                                    <li>Hormonal fluctuations</li>
                                </ul>
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mt-4">
                                    <p className="font-semibold mb-2">Real Example:</p>
                                    <p className="text-sm">Stephen weighs 185 lbs on Monday. On Friday, after a salty restaurant meal and a hard leg workout, he&apos;s 188 lbs. He didn&apos;t gain 3 pounds of fat in 4 days—it&apos;s water.</p>
                                </div>
                            </div>
                            <div className="bg-blue-500/10 text-blue-700 dark:text-blue-300 p-4 rounded-md font-medium">
                                <p className="font-bold mb-2">The Fix:</p>
                                <p className="text-sm">Track weekly averages, not daily weights. Weigh yourself every day and average the week. Compare week-to-week, not day-to-day.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Reason 4: You're Not Actually in a Deficit */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-purple-700">
                                <span className="text-2xl">📊</span> 4. You&apos;re Not Actually in a Deficit
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>Stephen calculated his TDEE as 2,400 calories. But TDEE calculators are estimates, not guarantees.</p>
                                <p className="font-semibold">His reality:</p>
                                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg space-y-2">
                                    <p className="text-sm">• Calculator said: 2,400 TDEE</p>
                                    <p className="text-sm">• His actual TDEE: 2,150 (he&apos;s less active than average)</p>
                                    <p className="text-sm">• He&apos;s eating: 2,000 calories</p>
                                    <p className="text-sm font-bold text-purple-700">His &quot;500-calorie deficit&quot; is actually only 150 calories.</p>
                                </div>
                                <p>At 150 calories per day, he&apos;ll lose about 1 pound every 3 weeks. Slow progress that water weight easily masks.</p>
                            </div>
                            <div className="bg-purple-500/10 text-purple-700 dark:text-purple-300 p-4 rounded-md font-medium">
                                <p className="font-bold mb-2">The Fix:</p>
                                <p className="text-sm">Use your real-world results to determine your actual TDEE. If you&apos;re not losing after 2-3 weeks, drop calories by 200 and reassess.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Reason 5: You're Building Muscle */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-green-700">
                                <span className="text-2xl">💪</span> 5. You&apos;re Building Muscle (Good Problem!)
                            </h3>
                            <div className="space-y-3 text-neutral-muted">
                                <p>Stephen just started lifting weights seriously. His scale hasn&apos;t moved, but his pants fit better and he looks leaner.</p>
                                <p className="font-semibold">What&apos;s happening:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                                        <p className="font-semibold mb-2">Lost:</p>
                                        <p className="text-sm">3 lbs of fat</p>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                                        <p className="font-semibold mb-2">Gained:</p>
                                        <p className="text-sm">3 lbs of muscle</p>
                                    </div>
                                </div>
                                <p className="text-sm">Net scale weight: 0 pounds. But his body composition completely changed.</p>
                            </div>
                            <div className="bg-green-500/10 text-green-700 dark:text-green-300 p-4 rounded-md font-medium">
                                <p className="font-bold mb-2">The Fix:</p>
                                <p className="text-sm">Don&apos;t just track the scale. Track measurements (waist, hips, chest), progress photos, and how your clothes fit.</p>
                            </div>
                        </div>
                    </Card>
                </section>

                <hr className="border-neutral-border" />

                {/* Stephen's Breakthrough */}
                <section className="bg-denim-500/5 rounded-2xl p-8 md:p-10 space-y-6">
                    <div className="inline-block p-4 rounded-full bg-background shadow-sm text-4xl mb-2">💡</div>
                    <h2 className="text-2xl font-bold">Stephen&apos;s Breakthrough</h2>
                    <p className="text-neutral-muted">
                        After learning these 5 reasons, Stephen made changes:
                    </p>
                    <div className="space-y-4">
                        {[
                            { icon: '✅', text: 'Started tracking cooking oils and weekend meals', result: 'Found 400 hidden calories/day' },
                            { icon: '✅', text: 'Recalculated TDEE after losing weight', result: 'Adjusted target from 1,900 to 1,700 calories' },
                            { icon: '✅', text: 'Tracked weekly weight averages', result: 'Stopped freaking out over daily fluctuations' },
                            { icon: '✅', text: 'Took progress photos', result: 'Saw visible changes the scale didn&apos;t show' },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                <div>
                                    <p className="font-medium text-neutral-text">{item.text}</p>
                                    <p className="text-sm text-neutral-muted">→ {item.result}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <blockquote className="text-lg font-medium italic pt-4 border-t border-neutral-border">
                        &quot;The scale started moving again. But more importantly, I learned that fat loss isn&apos;t always linear—and that&apos;s okay.&quot;
                    </blockquote>
                </section>

                {/* Video Resource */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Deep Dive: Understanding Fat Loss Plateaus</h2>
                    <p className="text-neutral-muted">
                        For a comprehensive breakdown of why plateaus happen and advanced strategies to break through them, check out this evidence-based video.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-neutral-border shadow-md bg-neutral-surface">
                        <div className="relative aspect-video w-full bg-neutral-200">
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
                                <span className="text-red-600">▶</span> Fat Loss Plateaus Explained
                            </h4>
                            <p className="text-sm text-neutral-muted mt-1">
                                Expert breakdown of metabolic adaptation, water retention, and how to keep losing fat.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action Steps */}
                <section className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-8 border border-denim-300/20 text-white">
                    <h2 className="text-2xl font-bold mb-6">Your Action Plan</h2>
                    <div className="space-y-4">
                        {[
                            'Track everything—oil, condiments, weekend meals—for 2 weeks',
                            "Recalculate your TDEE if you&apos;ve lost 10+ pounds",
                            'Weigh daily and track weekly averages, not daily changes',
                            'Take monthly progress photos and measurements',
                            'Be patient—real fat loss takes 8-12 weeks to show clearly',
                        ].map((step, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {index + 1}
                                </span>
                                <span className="font-medium">{step}</span>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/tools/tdee"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-denim-700 shadow-lg transition-all duration-200 hover:bg-denim-fade mt-8 w-full sm:w-auto"
                    >
                        <span>Recalculate Your TDEE</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </section>

            </div>
        </div>
    );
}
