import figma from '@figma/code-connect'
import { Modal } from './Modal'

figma.connect(Modal, 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=MODAL', {
  props: {
    title: figma.string('Title'),
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
  },
  example: ({ title, size }) => (
    <Modal open onClose={() => {}} title={title} size={size}>
      Modal content goes here
    </Modal>
  ),
})
