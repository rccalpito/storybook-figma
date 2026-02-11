import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=INPUT',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Choose a unique username for your account',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
  },
}

export const Required: Story = {
  args: {
    label: 'Full name',
    placeholder: 'John Doe',
    required: true,
    helperText: 'This field is required',
  },
}

export const Small: Story = {
  args: {
    label: 'Small input',
    size: 'sm',
    placeholder: 'Small size',
  },
}

export const Large: Story = {
  args: {
    label: 'Large input',
    size: 'lg',
    placeholder: 'Large size',
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full width input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14L10.5 10.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconRight: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'Disabled value',
  },
}
