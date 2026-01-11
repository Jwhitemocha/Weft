import Logo, { LogoWithText } from '@/components/ui/Logo'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Logo Options - Weft',
  description: 'Preview different logo designs for Weft',
}

export default function LogoDemoPage() {
  const variants: Array<{ name: string; key: 'weave' | 'threads' | 'geometric' | 'minimal'; description: string }> = [
    {
      name: 'Interlocking Weave',
      key: 'weave',
      description: 'Represents the warp (vertical) and weft (horizontal) threads interlocking. Most literal interpretation of weaving.',
    },
    {
      name: 'Horizontal Threads',
      key: 'threads',
      description: 'Pure weft concept - horizontal threads of varying lengths. Clean and minimal.',
    },
    {
      name: 'Geometric W',
      key: 'geometric',
      description: 'Stylized W shape with weave pattern overlay and horizontal accent lines.',
    },
    {
      name: 'Minimal Grid',
      key: 'minimal',
      description: 'Abstract fabric/grid pattern with horizontal accent. Modern and geometric.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-neutral-text mb-4">Weft Logo Options</h1>
          <p className="text-lg text-neutral-muted">
            Choose your favorite CSS-based logo design. All are scalable and use the Weft color palette.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {variants.map((variant) => (
            <Card key={variant.key} className="p-8">
              <h2 className="text-xl font-bold text-neutral-text mb-2">{variant.name}</h2>
              <p className="text-sm text-neutral-muted mb-6">{variant.description}</p>

              {/* Logo previews at different sizes */}
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-neutral-surface rounded-lg">
                  <Logo variant={variant.key} size={64} />
                  <div className="text-xs text-neutral-muted">64px (Large)</div>
                </div>

                <div className="flex items-center gap-6 p-4 bg-neutral-surface rounded-lg">
                  <Logo variant={variant.key} size={40} />
                  <div className="text-xs text-neutral-muted">40px (Default)</div>
                </div>

                <div className="flex items-center gap-6 p-4 bg-neutral-surface rounded-lg">
                  <Logo variant={variant.key} size={32} />
                  <div className="text-xs text-neutral-muted">32px (Small)</div>
                </div>

                {/* With text */}
                <div className="flex items-center gap-6 p-4 bg-denim-500/10 border border-denim-300 rounded-lg">
                  <LogoWithText variant={variant.key} size={32} />
                  <div className="text-xs text-neutral-muted ml-auto">With text</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dark background preview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-text mb-6">Dark Background Preview</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {variants.map((variant) => (
              <div key={variant.key} className="bg-neutral-900 rounded-xl p-8 flex flex-col items-center gap-4">
                <Logo variant={variant.key} size={48} />
                <span className="text-xs text-neutral-400">{variant.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage example in navbar context */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-text mb-6">Navbar Context Preview</h2>
          {variants.map((variant) => (
            <div key={variant.key} className="mb-4 border border-neutral-border rounded-xl overflow-hidden">
              <div className="bg-background/95 backdrop-blur border-b border-neutral-border p-4 flex items-center justify-between">
                <Logo variant={variant.key} size={36} />
                <div className="flex gap-6 text-sm text-neutral-muted">
                  <span>Tools</span>
                  <span>Learn</span>
                  <span>About</span>
                </div>
              </div>
              <div className="p-4 bg-neutral-surface/30 text-xs text-neutral-muted text-center">
                {variant.name}
              </div>
            </div>
          ))}
        </div>

        <Card className="p-8 bg-denim-500/5">
          <h3 className="text-lg font-bold text-neutral-text mb-3">Which one do you prefer?</h3>
          <p className="text-neutral-muted mb-4">
            Each logo represents the concept of &quot;weft&quot; (horizontal weaving threads) in a different way.
            Choose the one that best fits the Weft brand aesthetic of clarity, craft, and structure.
          </p>
          <ul className="text-sm text-neutral-muted space-y-2 list-disc list-inside">
            <li><strong>Interlocking Weave:</strong> Most detailed, shows full weaving concept</li>
            <li><strong>Horizontal Threads:</strong> Cleanest, most minimal, pure weft focus</li>
            <li><strong>Geometric W:</strong> Incorporates the letter W, balanced detail</li>
            <li><strong>Minimal Grid:</strong> Most abstract, modern and geometric</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
