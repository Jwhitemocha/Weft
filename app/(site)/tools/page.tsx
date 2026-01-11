import Link from 'next/link'
import Card from '@/components/ui/Card'

const tools = [
  {
    slug: 'tdee',
    title: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure and understand energy balance.',
    status: 'Available',
  },
  {
    slug: 'protein',
    title: 'Protein Calculator',
    description: 'Determine your optimal protein intake for your goals.',
    status: 'Coming Soon',
  },
  {
    slug: 'macros',
    title: 'Macro Split Tool',
    description: 'Find the right balance of protein, carbs, and fats.',
    status: 'Coming Soon',
  },
]

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Fitness Tools
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Calculators and tools to help you understand your fitness journey.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.slug} className="p-6">
            <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{tool.description}</p>
            {tool.status === 'Available' ? (
              <Link
                href={`/tools/${tool.slug}`}
                className="mt-4 inline-block text-sm font-medium text-denim-600 hover:text-denim-700"
              >
                Try it now
              </Link>
            ) : (
              <p className="mt-4 text-sm text-neutral-400">{tool.status}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
