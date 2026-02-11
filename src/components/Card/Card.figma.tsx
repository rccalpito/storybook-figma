import figma from '@figma/code-connect'
import { Card } from './Card'

figma.connect(Card, 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=CARD', {
  props: {
    variant: figma.enum('Variant', {
      Elevated: 'elevated',
      Outlined: 'outlined',
      Filled: 'filled',
    }),
    padding: figma.enum('Padding', {
      None: 'none',
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
  },
  example: ({ variant, padding }) => (
    <Card variant={variant} padding={padding}>
      Card content goes here
    </Card>
  ),
})
