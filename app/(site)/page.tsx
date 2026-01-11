import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    icon: '⚡',
    title: 'Honest Tools',
    description: 'No hidden formulas. Tools designed for real people who want to understand their numbers.',
    href: '/tools',
  },
  {
    icon: '📚',
    title: 'Learn Why',
    description: 'Clear explanations so you understand, not just follow.',
    href: '/learn',
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
                src="/logo/denim_daruma_text.png"
                alt="Weft Denim Daruma"
                width={300}
                height={300}
                priority
                className="relative h-auto w-60 sm:w-[312px] drop-shadow-lg"
              />
            </div>

            {/* Main headline */}
            <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-text leading-[1.1]">
              Weaving Your Fitness.{' '}
              <span className="text-denim-500">Together.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-neutral-muted">
              Tools and guides for understanding your body.
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group relative bg-neutral-surface border border-neutral-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-denim-500/5 hover:border-denim-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-denim-fade text-2xl">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl text-neutral-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-muted leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
