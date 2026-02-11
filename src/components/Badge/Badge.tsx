import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
  pill?: boolean
  dot?: boolean
  children: ReactNode
}

export const Badge = ({
  variant = 'default',
  size = 'md',
  pill = false,
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) => {
  const classNames = [
    styles.badge,
    styles[variant],
    styles[size],
    pill && styles.pill,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classNames} {...props}>
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  )
}
