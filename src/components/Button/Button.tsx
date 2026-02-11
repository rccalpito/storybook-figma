import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children?: ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  iconLeft,
  iconRight,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner} />}
      {!loading && iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  )
}
