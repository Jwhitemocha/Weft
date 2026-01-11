import type { Metadata } from 'next'
import TdeeCalculator from '@/tools/tdee/TdeeCalculator'
import { tdeeCopy } from '@/tools/tdee/copy'

export const metadata: Metadata = {
  title: 'TDEE Calculator',
  description:
    'Calculate your Total Daily Energy Expenditure (TDEE) and understand how many calories you burn each day.',
  openGraph: {
    title: 'TDEE Calculator | Weft',
    description:
      'Free, honest TDEE calculator. Understand your energy balance with transparent calculations and beginner-friendly explanations.',
  },
}

export default function TdeePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mb-8 lg:mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {tdeeCopy.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-muted">{tdeeCopy.description}</p>
      </div>

      <TdeeCalculator />

      {/* Educational content */}
      <div className="mt-16 lg:mt-20 border-t border-neutral-border pt-10">
        {/* Overview Section */}
        <section className="max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {tdeeCopy.overview.title}
          </h2>
          <p className="text-neutral-muted leading-relaxed mb-8">
            {tdeeCopy.overview.intro}
          </p>

          {/* TDEE Components Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {tdeeCopy.overview.components.map((component, index) => (
              <div
                key={index}
                className="bg-neutral-surface border border-neutral-border rounded-2xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{component.icon}</span>
                  <span className="text-sm font-semibold text-denim-500 bg-denim-fade px-2 py-1 rounded-full">
                    {component.percentage}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-text">{component.title}</h3>
                <p className="text-sm text-neutral-muted leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-neutral-muted italic bg-denim-fade/50 rounded-xl p-4">
            {tdeeCopy.overview.note}
          </p>
        </section>

        {/* How Calculated Section */}
        <section className="max-w-3xl mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {tdeeCopy.howCalculated.title}
          </h2>
          <p className="text-neutral-muted leading-relaxed mb-4">
            {tdeeCopy.howCalculated.content}
          </p>
          <p className="text-neutral-muted leading-relaxed mb-6">
            {tdeeCopy.howCalculated.formula}
          </p>

          <div className="space-y-3">
            {tdeeCopy.howCalculated.methods.map((method, index) => (
              <div key={index} className="pl-4 border-l-2 border-denim-300">
                <dt className="font-medium text-neutral-text">{method.name}</dt>
                <dd className="mt-1 text-sm text-neutral-muted">{method.description}</dd>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="max-w-3xl mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {tdeeCopy.whyItMatters.title}
          </h2>
          <p className="text-neutral-muted leading-relaxed mb-6">
            {tdeeCopy.whyItMatters.content}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {tdeeCopy.whyItMatters.points.map((point, index) => (
              <div
                key={index}
                className="bg-neutral-surface border border-neutral-border rounded-xl p-4"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-denim-500 mb-2">
                  {point.label}
                </span>
                <p className="text-sm text-neutral-muted">{point.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-neutral-muted bg-neutral-surface border border-neutral-border rounded-xl p-4">
            💡 {tdeeCopy.whyItMatters.caveat}
          </p>
        </section>

        {/* Increase TDEE Section */}
        <section className="max-w-3xl mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {tdeeCopy.increaseTdee.title}
          </h2>
          <p className="text-neutral-muted leading-relaxed mb-6">
            {tdeeCopy.increaseTdee.intro}
          </p>

          <div className="space-y-4">
            {tdeeCopy.increaseTdee.strategies.map((strategy, index) => (
              <div
                key={index}
                className="flex gap-4 bg-neutral-surface border border-neutral-border rounded-xl p-4"
              >
                <span className="text-2xl flex-shrink-0">{strategy.icon}</span>
                <div>
                  <h3 className="font-semibold text-neutral-text mb-1">{strategy.title}</h3>
                  <p className="text-sm text-neutral-muted">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TDEE vs BMI Section */}
        <section className="max-w-3xl mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {tdeeCopy.tdeeBmi.title}
          </h2>
          <p className="text-neutral-muted leading-relaxed">
            {tdeeCopy.tdeeBmi.content}
          </p>
        </section>

        {/* Sources */}
        <section className="max-w-3xl mt-12 pt-8 border-t border-neutral-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Sources</h3>
          <ul className="space-y-2">
            {tdeeCopy.explanations.howCalculated.sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-denim-500 hover:text-denim-700 underline underline-offset-2 transition-colors"
                >
                  {source.text}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
