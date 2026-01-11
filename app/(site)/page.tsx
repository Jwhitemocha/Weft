import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    icon: '⚡',
    title: 'Honest Calculations',
    description: 'No hidden formulas. We show you exactly how your numbers are calculated.',
  },
  {
    icon: '🎯',
    title: 'Actually Useful',
    description: 'Tools designed for real people, not fitness influencers selling supplements.',
  },
  {
    icon: '📚',
    title: 'Learn Why',
    description: 'Every tool comes with clear explanations so you understand, not just follow.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220 52% 46% / 0.08) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Logo with glow effect */}
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-2xl opacity-20 bg-denim-500 rounded-full scale-150" />
              <Image
                src="/logo/weft_daruma.png"
                alt="Weft Denim Daruma"
                width={140}
                height={140}
                priority
                className="relative h-auto w-28 sm:w-36 drop-shadow-lg"
              />
            </div>

            {/* Main headline */}
            <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-text leading-[1.1]">
              Weaving Your Fitness.{' '}
              <span className="text-denim-500">Together.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-neutral-muted">
              Free tools and guides for understanding your body. 
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/tools/tdee"
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-denim-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-denim-500/25 transition-all duration-200 hover:bg-denim-700 hover:shadow-xl hover:shadow-denim-500/30 hover:-translate-y-0.5"
              >
                <span>Calculate Your TDEE</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-neutral-border bg-background/50 px-8 py-4 text-lg font-semibold text-neutral-text transition-all duration-200 hover:border-denim-300 hover:bg-denim-fade"
              >
                <span>Start Learning</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6 text-sm text-neutral-muted">
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>100% Free</span>
              </div>
              <div className="h-4 w-px bg-neutral-border" />
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>No Account Required</span>
              </div>
              <div className="h-4 w-px bg-neutral-border hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-text">
              Built different.
            </h2>
            <p className="mt-3 text-neutral-muted">
              What makes Weft worth your time.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-neutral-surface border border-neutral-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-denim-500/5 hover:border-denim-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-denim-fade text-2xl">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-neutral-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-denim-700 to-denim-500 p-8 sm:p-12 text-center shadow-xl">
            {/* Decorative pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to understand your energy?
              </h2>
              <p className="text-denim-300 mb-8 max-w-lg mx-auto">
                Start with our TDEE calculator — it takes less than a minute and you&apos;ll learn exactly how many calories your body needs.
              </p>
              <Link
                href="/tools/tdee"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-denim-700 shadow-lg transition-all duration-200 hover:bg-denim-fade hover:-translate-y-0.5"
              >
                <span>Get Started Free</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
