import figma from '@figma/code-connect'
import { Avatar, AvatarGroup } from './Avatar'

// Single Avatar — Circle & Rounded variants
figma.connect(Avatar, 'https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn?node-id=535-231', {
  props: {
    type: figma.enum('Type', {
      Circle: 'circle',
      Rounded: 'rounded',
    }),
    size: figma.enum('Size', {
      SM: 'xs',
      Regular: 'sm',
      MD: 'md',
      LG: 'lg',
      XL: 'xl',
    }),
    placeholder: figma.enum('Placeholder', {
      True: 'PH',
    }),
    notificationDot: figma.enum('Notification dot', {
      True: true,
      False: false,
    }),
  },
  example: ({ type, size, placeholder, notificationDot }) => (
    <Avatar
      type={type}
      size={size}
      placeholder={placeholder}
      notificationDot={notificationDot}
      src="/avatar.jpg"
    />
  ),
})

// Close Button variant
figma.connect(Avatar, 'https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn?node-id=535-231', {
  variant: { Type: 'Close Button' },
  props: {
    size: figma.enum('Size', {
      SM: 'xs',
      Regular: 'sm',
      MD: 'md',
      LG: 'lg',
    }),
  },
  example: ({ size }) => (
    <Avatar
      type="circle"
      size={size}
      closable
      onClose={() => {}}
      src="/avatar.jpg"
    />
  ),
})

// Stacked Avatars
figma.connect(AvatarGroup, 'https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn?node-id=535-231', {
  variant: { Type: 'Stacked' },
  props: {
    size: figma.enum('Size', {
      SM: 'xs',
      Regular: 'sm',
      MD: 'md',
      LG: 'lg',
    }),
  },
  example: ({ size }) => (
    <AvatarGroup size={size}>
      <Avatar src="/avatar-1.jpg" />
      <Avatar src="/avatar-2.jpg" />
      <Avatar src="/avatar-3.jpg" />
    </AvatarGroup>
  ),
})

// With Counter
figma.connect(AvatarGroup, 'https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn?node-id=535-231', {
  variant: { Type: 'With counter' },
  props: {
    size: figma.enum('Size', {
      SM: 'xs',
      Regular: 'sm',
      MD: 'md',
      LG: 'lg',
    }),
  },
  example: ({ size }) => (
    <AvatarGroup size={size} max={3}>
      <Avatar src="/avatar-1.jpg" />
      <Avatar src="/avatar-2.jpg" />
      <Avatar src="/avatar-3.jpg" />
      <Avatar src="/avatar-4.jpg" />
      <Avatar src="/avatar-5.jpg" />
    </AvatarGroup>
  ),
})
