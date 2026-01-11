import Link from 'next/link'

const tools = [
  {
    slug: 'tdee',
    title: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure and understand exactly how many calories your body burns each day.',
    icon: '⚡',
    status: 'available',
    gradient: 'from-denim-700 to-denim-500',
  },
  {
    slug: 'meal-prep',
    title: 'Meal Prep Tool',
    description: 'Build your perfect meal plan with the right macros and calories dialed in for your specific goal.',
    icon: '🍱',
    status: 'coming-soon',
    gradient: 'from-emerald-700 to-emerald-500',
  },
  {
    slug: 'workout-builder',
    title: 'Workout Builder',
    description: 'Create a workout routine that fits your schedule and equipment—whether you train at home or in the gym.',
    icon: '💪',
    status: 'coming-soon',
    gradient: 'from-orange-700 to-orange-500',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
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
              Tools
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-muted leading-relaxed">
              Everything you need to understand and structure your fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const isAvailable = tool.status === 'available'
            const CardWrapper = isAvailable ? Link : 'div'
            const cardProps = isAvailable ? { href: `/tools/${tool.slug}` } : {}

            return (
              <CardWrapper
                key={tool.slug}
                {...cardProps}
                className={`group relative overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface transition-all duration-300 ${
                  isAvailable
                    ? 'hover:shadow-xl hover:shadow-denim-500/10 hover:border-denim-300 hover:-translate-y-1 cursor-pointer'
                    : 'opacity-60'
                }`}
              >
                {/* Gradient Header */}
                <div className={`relative h-32 bg-gradient-to-br ${tool.gradient} p-6 flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                  <div className={`relative text-6xl ${isAvailable ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-neutral-text">
                      {tool.title}
                    </h3>
                    {!isAvailable && (
                      <span className="inline-flex items-center rounded-full bg-neutral-border px-2.5 py-0.5 text-xs font-medium text-neutral-muted">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-muted leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  {isAvailable && (
                    <div className="flex items-center gap-2 text-denim-500 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Get Started</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </section>
    </div>
  )
}
