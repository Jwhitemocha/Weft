import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-denim-500 text-white hover:bg-denim-700 shadow-md shadow-denim-500/20 hover:shadow-lg hover:shadow-denim-500/25 hover:-translate-y-0.5 active:translate-y-0': variant === 'primary',
            'bg-neutral-surface text-denim-700 border-2 border-neutral-border hover:border-denim-300 hover:bg-denim-fade': variant === 'secondary',
            'hover:bg-neutral-surface text-neutral-muted hover:text-neutral-text': variant === 'ghost',
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-11 px-6 py-2 text-base': size === 'md',
            'h-13 px-8 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
