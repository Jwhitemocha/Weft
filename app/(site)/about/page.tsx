import Card from '@/components/ui/Card'
import Logo from '@/components/ui/Logo'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'Learn about Weft and our mission to provide honest fitness education.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-border bg-gradient-to-b from-denim-fade/30 to-background">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220 52% 46% / 0.05) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-denim-500/20 blur-2xl rounded-full" />
                <Logo variant="weave" size={80} className="relative" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-text sm:text-5xl lg:text-6xl">
              About <span className="text-denim-500">Weft</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-muted leading-relaxed">
              A permanent public utility for fitness and nutrition clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Mission */}
        <div className="space-y-6 mb-16">
          <p className="text-lg text-neutral-muted leading-relaxed">
            Weft exists to become the most trusted source of truth for fat loss fundamentals on the internet.
          </p>
          <p className="text-lg text-neutral-muted leading-relaxed">
            We replace confusion, fitness myths, and over-engineered apps with clarity, calm design, and numbers that make sense.
          </p>
        </div>

        {/* The Denim Daruma Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-text mb-8">The Denim Daruma</h2>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-denim-500/20 blur-3xl rounded-full" />
                <Image
                  src="/logo/daruma_only.png"
                  alt="Denim Daruma"
                  width={200}
                  height={200}
                  className="relative"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg text-neutral-muted leading-relaxed">
                Our symbol is a <span className="font-bold text-denim-600">Denim Daruma</span>—a fusion of two powerful traditions that represent everything we believe about sustainable change.
              </p>
            </div>
          </div>

          {/* Why Denim Daruma */}
          <div className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Denim Daruma?</h3>
            <div className="space-y-4 text-denim-50 leading-relaxed">
              <p>
                Fat loss isn&apos;t a 30-day challenge. It&apos;s not a hack, a trick, or a secret. It&apos;s <strong>structure built to last</strong>.
              </p>
              <p>
                Like denim that improves with wear, sustainable results come from systems you can maintain. Like the Daruma, they require patience, focus, and the willingness to trust the process—one step at a time.
              </p>
              <p className="text-lg font-semibold text-white pt-4">
                We chose the Denim Daruma because we believe fitness should be <em>durable</em>, <em>honest</em>, and <em>earned</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-text mb-8">Our Principles</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Clarity Over Complexity</h3>
              <p className="text-neutral-muted">Every number must be explainable.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Structure Over Motivation</h3>
              <p className="text-neutral-muted">We teach systems, not hype.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Transparency Over Magic</h3>
              <p className="text-neutral-muted">No black boxes. No hidden logic.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Craft Over Speed</h3>
              <p className="text-neutral-muted">Fewer tools, done exceptionally well.</p>
            </Card>
          </div>
        </div>

        {/* Privacy & Honesty */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-text mb-8">Privacy & Honesty</h2>
          <Card className="p-8 bg-gradient-to-br from-denim-500/5 to-denim-700/5 border-denim-300/20">
            <p className="text-lg text-neutral-text leading-relaxed">
              Weft is front-end only. No accounts. No backend. No tracking cookies. No paywalls. Just structure.
            </p>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="bg-neutral-surface border border-neutral-border rounded-xl p-6">
          <p className="text-sm text-neutral-muted italic leading-relaxed">
            Weft is for education and general guidance. It does not diagnose, treat, or replace professional medical advice. Individual needs vary. Consult a qualified clinician for medical concerns.
          </p>
        </div>
      </section>
    </div>
  )
}
