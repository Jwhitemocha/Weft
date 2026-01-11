import Card from '@/components/ui/Card'
import Logo from '@/components/ui/Logo'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'Fitness tools that actually teach you what the numbers mean. No subscriptions, no tracking, no bullshit.',
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
              Fitness tools that don&apos;t suck.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Mission */}
        <div className="space-y-6 mb-16">
          <p className="text-lg text-neutral-muted leading-relaxed">
            The fitness industry is full of noise. Apps that track everything but explain nothing. Influencers selling plans. Calculators that spit out numbers with no context.
          </p>
          <p className="text-lg text-neutral-muted leading-relaxed">
            Weft is different. We built tools that actually teach you what the numbers mean and why they matter. 
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
                A <span className="font-bold text-denim-600">Daruma</span> is a Japanese symbol of perseverance. <span className="font-bold text-denim-600">Denim</span> gets better with time and wear. Put them together and you get what fitness actually is: something you build slowly, that lasts.
              </p>
            </div>
          </div>

          {/* Why Denim Daruma */}
          <div className="bg-gradient-to-br from-denim-700 to-denim-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
            <div className="space-y-4 text-denim-50 leading-relaxed">
              <p>
                Fat loss isn&apos;t a 30-day challenge. There&apos;s no hack, no trick, no secret meal plan. It&apos;s just consistent work over time.
              </p>
              <p>
                Like good denim, results get better the longer you stick with them. Like the Daruma, you need patience and focus to see it through.
              </p>
              <p className="text-lg font-semibold text-white pt-4">
                Fitness should be durable, honest, and earned. That&apos;s the Denim Daruma.
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-text mb-8">How We Build</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Clarity Over Complexity</h3>
              <p className="text-neutral-muted">If we can&apos;t explain how a number was calculated, we don&apos;t show it.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Structure Over Motivation</h3>
              <p className="text-neutral-muted">Systems work when you don&apos;t feel like it. Motivation doesn&apos;t.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Transparency Over Magic</h3>
              <p className="text-neutral-muted">Every formula is visible. Every assumption is explained. No secrets.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 transition-all duration-300">
              <h3 className="text-lg font-bold text-denim-500 mb-2">Craft Over Speed</h3>
              <p className="text-neutral-muted">We&apos;d rather ship one great tool than ten mediocre ones.</p>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-neutral-surface border border-neutral-border rounded-xl p-6">
          <p className="text-sm text-neutral-muted italic leading-relaxed">
            This is education, not medical advice. If you have health concerns, talk to a doctor. We&apos;re here to teach, not diagnose.
          </p>
        </div>
      </section>
    </div>
  )
}
