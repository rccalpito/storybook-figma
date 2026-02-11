import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=CARD',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <p>
        This is a default elevated card with medium padding. It has a subtle
        shadow to lift it off the page and create visual hierarchy. Perfect for
        displaying important content.
      </p>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <p>
        This is an outlined card variant with a border instead of a shadow. It
        provides a lighter, more subtle visual treatment while still maintaining
        clear boundaries.
      </p>
    ),
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <p>
        This is a filled card with a light background color. It offers a softer,
        more integrated appearance that works well for secondary content or
        grouped information.
      </p>
    ),
  },
}

export const WithHeader: Story = {
  args: {
    header: 'Card Header',
    children: (
      <p>
        This card includes a header section at the top. Headers are useful for
        providing context, titles, or actions related to the card content below.
      </p>
    ),
  },
}

export const WithFooter: Story = {
  args: {
    footer: 'Card Footer',
    children: (
      <p>
        This card includes a footer section at the bottom. Footers are ideal for
        actions, metadata, or additional information related to the card content.
      </p>
    ),
  },
}

export const WithHeaderAndFooter: Story = {
  args: {
    header: 'Product Information',
    footer: 'Last updated: January 2025',
    children: (
      <>
        <p>
          This card demonstrates both header and footer sections working together.
          The header provides the title while the footer shows supplementary
          information.
        </p>
        <p>
          Multiple paragraphs of content can be placed in the body, and they will
          be properly contained between the header and footer sections.
        </p>
      </>
    ),
  },
}

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div style={{ padding: '16px', background: '#f0f0f0' }}>
        This card has no padding in the body, allowing full control over content
        layout. This is useful for images, tables, or custom layouts that need to
        extend to the edges.
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <p>
        This card uses small padding, providing a more compact appearance. It's
        great for dense layouts or when you need to fit more cards in a limited
        space.
      </p>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <p>
        This card uses large padding for a more spacious, breathable layout.
        Perfect for featured content or when you want to draw extra attention to
        important information.
      </p>
    ),
  },
}
