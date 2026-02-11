import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  header?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

export const Card = ({
  variant = 'elevated',
  padding = 'md',
  header,
  footer,
  children,
  className,
  ...props
}: CardProps) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[`padding${padding.charAt(0).toUpperCase()}${padding.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClasses} {...props}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}
