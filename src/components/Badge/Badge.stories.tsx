import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=BADGE',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    pill: {
      control: 'boolean',
    },
    dot: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Badge',
  },
}

export const Pill: Story = {
  args: {
    pill: true,
    children: 'Pill Badge',
  },
}

export const WithDot: Story = {
  args: {
    dot: true,
    variant: 'success',
    children: 'Active',
  },
}

export const AllVariants: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge size="sm">Small</Badge>
      <Badge pill>Pill</Badge>
      <Badge dot variant="success">With Dot</Badge>
    </div>
  ),
}
