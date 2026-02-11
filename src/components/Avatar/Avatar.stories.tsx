import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn/flowbite-pro-figma-v2.10.0?node-id=535-231&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['circle', 'rounded'],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    notificationDot: {
      control: 'boolean',
    },
    closable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const sampleImage = 'https://i.pravatar.cc/150?img=1'
const sampleImage2 = 'https://i.pravatar.cc/150?img=2'
const sampleImage3 = 'https://i.pravatar.cc/150?img=3'
const sampleImage4 = 'https://i.pravatar.cc/150?img=4'

export const Default: Story = {
  args: {
    src: sampleImage,
    alt: 'User avatar',
    type: 'circle',
    size: 'sm',
  },
}

export const Circle: Story = {
  args: {
    src: sampleImage,
    alt: 'Circle avatar',
    type: 'circle',
    size: 'md',
  },
}

export const Rounded: Story = {
  args: {
    src: sampleImage,
    alt: 'Rounded avatar',
    type: 'rounded',
    size: 'md',
  },
}

export const WithPlaceholder: Story = {
  args: {
    type: 'circle',
    size: 'md',
    placeholder: 'PH',
  },
}

export const WithNotificationDot: Story = {
  args: {
    src: sampleImage,
    alt: 'User avatar',
    type: 'circle',
    size: 'md',
    notificationDot: true,
  },
}

export const RoundedWithNotificationDot: Story = {
  args: {
    src: sampleImage,
    alt: 'User avatar',
    type: 'rounded',
    size: 'md',
    notificationDot: true,
  },
}

export const CloseButton: Story = {
  args: {
    src: sampleImage,
    alt: 'Dismissible avatar',
    type: 'circle',
    size: 'xs',
    closable: true,
    onClose: () => alert('Close clicked'),
  },
}

export const AllSizesCircle: Story = {
  name: 'Circle — All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar src={sampleImage} alt="XS" size="xs" />
      <Avatar src={sampleImage} alt="SM" size="sm" />
      <Avatar src={sampleImage} alt="MD" size="md" />
      <Avatar src={sampleImage} alt="LG" size="lg" />
      <Avatar src={sampleImage} alt="XL" size="xl" />
    </div>
  ),
}

export const AllSizesRounded: Story = {
  name: 'Rounded — All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar src={sampleImage} alt="XS" type="rounded" size="xs" />
      <Avatar src={sampleImage} alt="SM" type="rounded" size="sm" />
      <Avatar src={sampleImage} alt="MD" type="rounded" size="md" />
      <Avatar src={sampleImage} alt="LG" type="rounded" size="lg" />
      <Avatar src={sampleImage} alt="XL" type="rounded" size="xl" />
    </div>
  ),
}

export const NotificationDotSizes: Story = {
  name: 'Notification Dot — All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar src={sampleImage} alt="XS" size="xs" notificationDot />
      <Avatar src={sampleImage} alt="SM" size="sm" notificationDot />
      <Avatar src={sampleImage} alt="MD" size="md" notificationDot />
      <Avatar src={sampleImage} alt="LG" size="lg" notificationDot />
      <Avatar src={sampleImage} alt="XL" size="xl" notificationDot />
    </div>
  ),
}

export const PlaceholderSizes: Story = {
  name: 'Placeholder — All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar placeholder="PH" size="xs" />
      <Avatar placeholder="PH" size="sm" />
      <Avatar placeholder="PH" size="md" />
      <Avatar placeholder="PH" size="lg" />
      <Avatar placeholder="PH" size="xl" />
    </div>
  ),
}

export const RoundedPlaceholderSizes: Story = {
  name: 'Rounded Placeholder — All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar placeholder="PH" type="rounded" size="xs" />
      <Avatar placeholder="PH" type="rounded" size="sm" />
      <Avatar placeholder="PH" type="rounded" size="md" />
      <Avatar placeholder="PH" type="rounded" size="lg" />
      <Avatar placeholder="PH" type="rounded" size="xl" />
    </div>
  ),
}

export const Stacked: Story = {
  render: () => (
    <AvatarGroup size="sm">
      <Avatar src={sampleImage} alt="User 1" />
      <Avatar src={sampleImage2} alt="User 2" />
      <Avatar src={sampleImage3} alt="User 3" />
      <Avatar src={sampleImage4} alt="User 4" />
    </AvatarGroup>
  ),
}

export const StackedWithCounter: Story = {
  render: () => (
    <AvatarGroup size="sm" max={3}>
      <Avatar src={sampleImage} alt="User 1" />
      <Avatar src={sampleImage2} alt="User 2" />
      <Avatar src={sampleImage3} alt="User 3" />
      <Avatar src={sampleImage4} alt="User 4" />
      <Avatar src={sampleImage} alt="User 5" />
      <Avatar src={sampleImage2} alt="User 6" />
    </AvatarGroup>
  ),
}

export const StackedAllSizes: Story = {
  name: 'Stacked — All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <AvatarGroup size="xs">
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
      </AvatarGroup>
      <AvatarGroup size="sm">
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
      </AvatarGroup>
      <AvatarGroup size="md">
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
      </AvatarGroup>
      <AvatarGroup size="lg">
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
      </AvatarGroup>
    </div>
  ),
}

export const WithCounterAllSizes: Story = {
  name: 'With Counter — All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <AvatarGroup size="xs" max={3}>
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
        <Avatar src={sampleImage} alt="User 5" />
      </AvatarGroup>
      <AvatarGroup size="sm" max={3}>
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
        <Avatar src={sampleImage} alt="User 5" />
      </AvatarGroup>
      <AvatarGroup size="md" max={3}>
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
        <Avatar src={sampleImage} alt="User 5" />
      </AvatarGroup>
      <AvatarGroup size="lg" max={3}>
        <Avatar src={sampleImage} alt="User 1" />
        <Avatar src={sampleImage2} alt="User 2" />
        <Avatar src={sampleImage3} alt="User 3" />
        <Avatar src={sampleImage4} alt="User 4" />
        <Avatar src={sampleImage} alt="User 5" />
      </AvatarGroup>
    </div>
  ),
}
