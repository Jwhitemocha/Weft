'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        We&apos;re sorry, an unexpected error occurred.
      </p>
      <div className="mt-10">
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
}
