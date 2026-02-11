import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'
import styles from './Input.module.css'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  helperText?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: ReactNode
  iconRight?: ReactNode
  required?: boolean
  fullWidth?: boolean
  id?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      iconLeft,
      iconRight,
      required = false,
      fullWidth = false,
      id: providedId,
      className,
      ...props
    },
    ref,
  ) => {
    const autoId = useId()
    const id = providedId || autoId
    const helperId = `${id}-helper`
    const errorId = `${id}-error`

    const wrapperClasses = [
      styles.wrapper,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const inputWrapperClasses = [
      styles.inputWrapper,
      styles[size],
      error && styles.inputWrapperError,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <div className={inputWrapperClasses}>
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <input
            ref={ref}
            id={id}
            className={styles.input}
            required={required}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            aria-invalid={error ? 'true' : undefined}
            {...props}
          />
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </div>
        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
