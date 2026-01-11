import { forwardRef } from 'react'
import clsx from 'clsx'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'text-sm font-medium text-neutral-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        {...props}
      />
    )
  }
)

Label.displayName = 'Label'

export default Label
