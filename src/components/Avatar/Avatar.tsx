import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Avatar.module.css'

export type AvatarType = 'circle' | 'rounded'
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar shape */
  type?: AvatarType
  /** Size of the avatar */
  size?: AvatarSize
  /** Image source URL */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Show placeholder initials instead of image */
  placeholder?: string
  /** Show a green notification dot */
  notificationDot?: boolean
  /** Show a close/dismiss button */
  closable?: boolean
  /** Callback when close button is clicked */
  onClose?: () => void
  /** Custom content to render inside (overrides src/placeholder) */
  children?: ReactNode
}

const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 80,
  xl: 144,
}

export const Avatar = ({
  type = 'circle',
  size = 'sm',
  src,
  alt = '',
  placeholder,
  notificationDot = false,
  closable = false,
  onClose,
  children,
  className,
  ...props
}: AvatarProps) => {
  const classNames = [
    styles.avatar,
    styles[type],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const dimension = sizeMap[size]

  return (
    <div className={classNames} {...props}>
      {children ? (
        children
      ) : src && !placeholder ? (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          width={dimension}
          height={dimension}
        />
      ) : (
        <span className={styles.placeholder}>
          {placeholder ?? '?'}
        </span>
      )}
      {notificationDot && <span className={styles.dot} />}
      {closable && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Remove"
          type="button"
        >
          <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of avatars in the group */
  size?: AvatarSize
  /** Maximum number of avatars to show before counter */
  max?: number
  /** Avatar elements */
  children: ReactNode
}

export const AvatarGroup = ({
  size = 'sm',
  max,
  children,
  className,
  ...props
}: AvatarGroupProps) => {
  const childArray = Array.isArray(children)
    ? children.filter(Boolean)
    : [children]

  const visible = max ? childArray.slice(0, max) : childArray
  const remaining = max ? childArray.length - max : 0

  const classNames = [
    styles.group,
    styles[`group-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames} {...props}>
      {visible}
      {remaining > 0 && (
        <div
          className={[
            styles.avatar,
            styles.circle,
            styles[size],
            styles.counter,
          ].join(' ')}
        >
          <span className={styles.placeholder}>+{remaining}</span>
        </div>
      )}
    </div>
  )
}
