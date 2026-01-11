import { forwardRef } from 'react'
import clsx from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'flex h-11 w-full rounded-md border bg-neutral-surface px-3 py-2 text-sm text-neutral-text transition-colors',
          'placeholder:text-neutral-muted',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error ? 'border-error ring-error focus-visible:ring-error' : 'border-neutral-border hover:border-denim-300',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
