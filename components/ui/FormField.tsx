import { forwardRef } from 'react'
import clsx from 'clsx'
import Label from './Label'
import Input, { InputProps } from './Input'

export interface FormFieldProps extends InputProps {
  label: string
  helperText?: string
  errorMessage?: string
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, helperText, errorMessage, id, className, error, ...props }, ref) => {
    const inputId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`
    const helperId = helperText ? `${inputId}-helper` : undefined
    const errorId = errorMessage ? `${inputId}-error` : undefined
    const describedBy = [helperId, errorId].filter(Boolean).join(' ')

    return (
      <div className={clsx('space-y-2', className)}>
        <Label htmlFor={inputId}>{label}</Label>
        {helperText && (
          <p id={helperId} className="text-sm text-neutral-muted">
            {helperText}
          </p>
        )}
        <Input
          ref={ref}
          id={inputId}
          error={!!errorMessage || error}
          aria-describedby={describedBy || undefined}
          aria-invalid={!!errorMessage || error}
          {...props}
        />
        {errorMessage && (
          <p id={errorId} className="text-sm text-error" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'

export default FormField
