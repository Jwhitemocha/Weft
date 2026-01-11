import { forwardRef } from 'react'
import clsx from 'clsx'

export type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-lg border border-neutral-border bg-neutral-surface shadow-sm',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export default Card
