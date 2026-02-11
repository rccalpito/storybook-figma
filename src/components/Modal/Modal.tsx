import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import styles from './Modal.module.css'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  size?: 'sm' | 'md' | 'lg'
  footer?: ReactNode
  closeOnOverlayClick?: boolean
  children: ReactNode
}

export const Modal = ({
  open,
  onClose,
  title,
  size = 'md',
  footer,
  closeOnOverlayClick = true,
  children,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => {
      onClose()
    }

    dialog.addEventListener('close', handleClose)
    return () => {
      dialog.removeEventListener('close', handleClose)
    }
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!closeOnOverlayClick) return

    const dialog = dialogRef.current
    if (!dialog) return

    const rect = dialog.getBoundingClientRect()
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width

    if (!isInDialog) {
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${styles[size]}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </dialog>
  )
}
