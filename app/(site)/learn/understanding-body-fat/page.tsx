import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { BodyFatVisualizer } from '@/components/education/body-fat-visualizer';

export const metadata: Metadata = {
    title: 'Understanding Body Fat: A Story with Kaeton',
    description: 'What your body fat percentage really means, why it matters, and how to measure it properly.',
};


export default function UnderstandingBodyFatPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border/50 bg-muted/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
                <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
                    <Link
                        href="/learn"
                        className="inline-flex items-center text-sm font-medium text-neutral-muted hover:text-denim-500 mb-6 transition-colors"
                    >
                        ← Back to Learn
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-denim-500 to-denim-700">
                        Understanding Body Fat
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-muted font-light max-w-2xl">
                        A story about numbers, neighborhoods, and what actually matters.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="container max-w-3xl mx-auto px-4 py-12 space-y-16">

                {/* Meet Kaeton */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4">Meet Kaeton.</h2>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        Kaeton isn&apos;t lazy. He&apos;s not undisciplined. He works, he moves, he eats… but like most people, he has no idea what his body fat percentage actually means — or why it matters.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-muted">
                        One day, Kaeton steps on a smart scale. It flashes a number: <strong>27%</strong>.
                    </p>
                    <div className="border-l-4 border-denim-500 pl-6 py-2 my-8 italic text-xl">
                        Kaeton squints. &quot;Is that… bad?&quot;
                    </div>
                    <p>Let&apos;s walk through what that number really means — and why body fat is not the villain people think it is.</p>
                </section>

                {/* What Is Body Fat */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">First: What Is Body Fat?</h2>
                    <p className="text-neutral-muted">Body fat is simply stored energy. Your body keeps it around for:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["Fuel when food isn&apos;t available", 'Hormone production', 'Temperature regulation', 'Protecting organs'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-neutral-surface border border-neutral-border">
                                <span className="w-8 h-8 rounded-full bg-denim-500/10 flex items-center justify-center text-denim-500 font-bold">{i + 1}</span>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Two Neighborhoods */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold border-b pb-4">Kaeton&apos;s Fat Has Two Neighborhoods</h2>

                    {/* Subcutaneous */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-teal-600">
                                <span className="text-2xl">🏘️</span> Subcutaneous Fat (The Chill Neighbor)
                            </h3>
                            <div className="space-y-2 text-neutral-muted">
                                <p>This is the fat under your skin. You can pinch it. Found on arms, legs, hips, and belly.</p>
                                <p><strong>The Truth:</strong> It&apos;s mostly harmless. It softens your appearance and makes abs &quot;disappear&quot;.</p>
                            </div>
                            <div className="bg-teal-500/10 text-teal-700 dark:text-teal-300 p-3 rounded-md text-sm font-medium">
                                Kaeton can relax — this fat isn&apos;t plotting anything evil.
                            </div>
                        </div>
                    </Card>

                    {/* Visceral */}
                    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
                                <span className="text-2xl">🏭</span> Visceral Fat (The Problematic One)
                            </h3>
                            <div className="space-y-2 text-neutral-muted">
                                <p>This lives deep inside the abdomen, wrapped around organs (liver, pancreas). It&apos;s invisible from the outside.</p>
                                <p><strong>The Problem:</strong> It interferes with insulin, raises inflammation, and messes with hormones.</p>
                            </div>
                            <div className="bg-red-500/10 text-red-700 dark:text-red-300 p-3 rounded-md text-sm font-medium">
                                This is why two people at the same weight can have very different health outcomes.
                            </div>
                        </div>
                    </Card>
                </section>

                {/* The Spectrum */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">What Do Body Fat Percentages Actually Mean?</h2>
                    <p className="text-neutral-muted mb-6">Let&apos;s put Kaeton on a spectrum.</p>

                    <div className="space-y-4">
                        {[
                            { color: 'bg-red-500', title: '30%+ Body Fat (High Risk Zone)', desc: 'Fatigue, poor recovery, metabolic strain. Fat loss here improves health fast.', status: 'Overloaded' },
                            { color: 'bg-orange-500', title: '25–30% (Average but Not Ideal)', desc: 'Common in modern lifestyles. Subcutaneous dominates, but visceral is creeping up.', status: 'Average' },
                            { color: 'bg-yellow-500', title: '18–25% (Healthy & Sustainable)', desc: 'Organs are happier. Energy improves. Clothes fit better without obsession.', status: 'Sweet Spot' },
                            { color: 'bg-green-500', title: '12–18% (Lean & Athletic)', desc: 'Visible muscle definition. High insulin sensitivity. Requires consistency.', status: 'Fit' },
                            { color: 'bg-blue-500', title: 'Under 10–12% (Performance Zone)', desc: 'Hard to maintain. Hormones may suffer. Useful for short-term goals, not always health.', status: 'Extreme' },
                        ].map((zone, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className={`w-2 rounded-full ${zone.color} shrink-0`} />
                                <div className="pb-4">
                                    <h3 className="font-bold text-lg">{zone.title}</h3>
                                    <p className="text-neutral-muted text-sm mt-1">{zone.desc}</p>
                                    <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-neutral-surface font-mono tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity`}>
                                        {zone.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Kaeton's Realization */}
                <section className="bg-denim-500/5 rounded-2xl p-8 md:p-10 text-center space-y-6">
                    <div className="inline-block p-4 rounded-full bg-background shadow-sm text-4xl mb-2">💡</div>
                    <h2 className="text-2xl font-bold">The Big Realization Kaeton Has</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-md mx-auto">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-neutral-muted uppercase text-xs tracking-wider">It isn&apos;t about</h4>
                            <ul className="space-y-1">
                                <li className="text-red-500">❌ Shame</li>
                                <li className="text-red-500">❌ Perfection</li>
                                <li className="text-red-500">❌ Six-pack obsession</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-neutral-muted uppercase text-xs tracking-wider">It is about</h4>
                            <ul className="space-y-1">
                                <li className="text-green-600 font-medium">✅ Organ health</li>
                                <li className="text-green-600 font-medium">✅ Energy levels</li>
                                <li className="text-green-600 font-medium">✅ Sustainability</li>
                            </ul>
                        </div>
                    </div>
                    <blockquote className="text-lg font-medium italic pt-4">
                        &quot;I don&apos;t need to be the leanest person in the room. I just need my body working with me, not against me.&quot;
                    </blockquote>
                </section>

                <hr className="border-border/50" />

                {/* Accuracy Section */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold">&quot;But… How Accurate Is That Number?&quot;</h2>
                    <div className="space-y-4">
                        <p className="text-neutral-muted">Kaeton stares at his scale. Yesterday: <strong>27%</strong>. Today: <strong>25.8%</strong>. He did nothing different. Why?</p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-neutral-surface rounded-xl border border-neutral-border">
                                <h4 className="font-bold flex items-center gap-2 mb-3">⚖️ Smart Scales (Estimates)</h4>
                                <p className="text-sm mb-4 text-neutral-muted">Most use Bioelectrical Impedance. They guess based on how electricity flows through you.</p>
                                <div className="text-xs space-y-1 text-neutral-muted">
                                    <p>• Hydration levels affect it</p>
                                    <p>• Sodium intake affects it</p>
                                    <p>• Even cold feet affect it!</p>
                                </div>
                                <div className="mt-4 text-sm font-semibold text-denim-500">Good for trends, not truth.</div>
                            </div>

                            <div className="p-6 bg-neutral-surface rounded-xl border border-neutral-border">
                                <h4 className="font-bold flex items-center gap-2 mb-3">🧠 DEXA Scan (The Gold Standard)</h4>
                                <p className="text-sm mb-4 text-neutral-muted">Uses low-dose X-rays to measure visceral fat and lean mass precisely.</p>
                                <div className="text-xs space-y-1 text-neutral-muted">
                                    <p>• Very accurate</p>
                                    <p>• Costs money</p>
                                    <p>• Requires appointment</p>
                                </div>
                                <div className="mt-4 text-sm font-semibold text-denim-500">Best if you need precision.</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mt-8">The Surprisingly Effective &quot;Mirror Method&quot;</h3>
                        <p className="text-neutral-muted">Kaeton realizes that visual comparison is often more accurate than a cheap scale. Humans are good at pattern recognition.</p>

                        <BodyFatVisualizer />
                    </div>
                </section>

                {/* Recommended Resource */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Deep Dive Recommendation</h2>
                    <p className="text-neutral-muted">
                        For a visual breakdown of body fat percentages and the science behind measuring them, we highly recommend this video by Jeff Nippard. He breaks down the accuracy of different methods (DEXA, Calipers, BIA) with real-world examples.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-neutral-border shadow-md bg-neutral-surface">
                        <div className="relative aspect-video w-full">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/5K9QhkPww44"
                                title="Jeff Nippard Body Fat Explained"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="p-4 bg-neutral-surface">
                            <h4 className="font-bold text-lg flex items-center gap-2">
                                <span className="text-red-600">▶</span> Body Fat % Explained (Science-Based)
                            </h4>
                            <p className="text-sm text-neutral-muted mt-1">
                                Jeff Nippard explores the margins of error in common measurements and shows what real body fat percentages look like.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-gradient-to-br from-denim-500/10 to-denim-700/10 rounded-2xl p-8 border border-denim-300/20">
                    <h2 className="text-2xl font-bold mb-4">The Rule We Recommend</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-denim-500 text-white flex items-center justify-center text-sm font-bold">1</span>
                            <span className="font-medium">Use scales for trends</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-denim-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                            <span className="font-medium">Use visuals for context</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-denim-500 text-white flex items-center justify-center text-sm font-bold">3</span>
                            <span className="font-medium">Never chase single readings</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
