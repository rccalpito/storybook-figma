import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Modal } from './Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=MODAL',
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>This is the modal content. You can put anything here.</p>
        </Modal>
      </>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Modal Title',
    children: 'Modal content',
  },
}

export const SmallSize: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Small Modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>This is a small modal with limited width.</p>
        </Modal>
      </>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Small Modal',
    size: 'sm',
    children: 'Modal content',
  },
}

export const LargeSize: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Large Modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>This is a large modal with more width for content-heavy dialogs.</p>
          <p>It can accommodate more text and wider layouts.</p>
        </Modal>
      </>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Large Modal',
    size: 'lg',
    children: 'Modal content',
  },
}

export const WithFooter: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal with Footer</button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <>
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button onClick={() => setOpen(false)}>Confirm</button>
            </>
          }
        >
          <p>This modal has action buttons in the footer.</p>
          <p>Click Cancel or Confirm to close the modal.</p>
        </Modal>
      </>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Confirm Action',
    children: 'Modal content',
  },
}

export const NoOverlayClose: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>This modal cannot be closed by clicking the backdrop.</p>
          <p>You must use the close button or ESC key.</p>
        </Modal>
      </>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Required Action',
    closeOnOverlayClick: false,
    children: 'Modal content',
  },
}

export const LongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal with Long Content</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <h3>Section 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3>Section 2</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <h3>Section 3</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <h3>Section 4</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <h3>Section 5</h3>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </Modal>
      </>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Long Content Modal',
    children: 'Modal content',
  },
}
