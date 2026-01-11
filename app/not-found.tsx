import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Page Not Found
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-10">
        <Link href="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  )
}
