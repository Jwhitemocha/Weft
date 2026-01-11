import Link from 'next/link'
import Card from '@/components/ui/Card'

const articles = [
  {
    slug: 'what-is-tdee',
    title: 'What is TDEE?',
    description: 'A beginner\'s guide to understanding Total Daily Energy Expenditure and why it matters for fat loss.',
    category: 'Basics',
    readTime: '5 min',
    icon: '📊',
  },
  {
    slug: 'energy-balance',
    title: 'Energy Balance Explained',
    description: 'The simple math behind all weight loss and weight gain.',
    category: 'Basics',
    readTime: '4 min',
    icon: '⚖️',
  },
  {
    slug: 'understanding-body-fat',
    title: 'Understanding Body Fat: Meet Kaeton',
    description: 'What your body fat percentage really means, why it matters, and how to measure it properly.',
    category: 'Basics',
    readTime: '12 min',
    icon: '📏',
  },
  {
    slug: 'protein-story',
    title: 'The Protein Story: Meet Katelynn',
    description: 'Why protein matters more than you think, told through one person\'s journey.',
    category: 'Nutrition',
    readTime: '8 min',
    icon: '🥩',
  },
  {
    slug: 'why-not-losing-weight',
    title: 'Why You\'re Not Losing Weight: Meet Stephen',
    description: 'The hidden reasons your scale won\'t budge (and what to do about it).',
    category: 'Fat Loss',
    readTime: '10 min',
    icon: '🔍',
  },
  {
    slug: 'sleep-and-recovery',
    title: 'Sleep: The Missing Piece',
    description: 'How poor sleep sabotages your fitness goals and what to do about it.',
    category: 'Recovery',
    readTime: '7 min',
    icon: '😴',
  },
]

const categories = ['All', 'Basics', 'Nutrition', 'Fat Loss', 'Recovery']

export default function LearnPage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-neutral-text sm:text-5xl lg:text-6xl">
              Learn the{' '}
              <span className="text-denim-500">Fundamentals</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-muted leading-relaxed">
              Evidence-based guides to help you understand fitness, nutrition, and energy balance.
              No BS, no quick fixes—just what actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-neutral-surface border border-neutral-border text-neutral-text hover:border-denim-300 hover:bg-denim-fade"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/learn/${article.slug}`}>
              <Card className="h-full p-6 transition-all duration-300 hover:shadow-lg hover:shadow-denim-500/10 hover:border-denim-300 hover:-translate-y-1 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{article.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-denim-500 bg-denim-fade px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-text group-hover:text-denim-500 transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-muted leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-border">
                  <span className="text-xs text-neutral-muted">{article.readTime} read</span>
                  <span className="text-sm font-medium text-denim-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read more →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-denim-700 to-denim-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to put knowledge into action?
          </h2>
          <p className="text-denim-300 mb-8 max-w-2xl mx-auto">
            Calculate your TDEE and start making data-driven decisions about your nutrition and training.
          </p>
          <Link
            href="/tools/tdee"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-denim-700 shadow-lg transition-all duration-200 hover:bg-denim-fade hover:-translate-y-0.5"
          >
            <span>Calculate Your TDEE</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
