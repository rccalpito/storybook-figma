import figma from '@figma/code-connect'
import { Badge } from './Badge'

figma.connect(Badge, 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=BADGE', {
  props: {
    variant: figma.enum('Variant', {
      Default: 'default',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
      Info: 'info',
    }),
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
    }),
    label: figma.string('Label'),
    pill: figma.boolean('Pill'),
    dot: figma.boolean('Dot'),
  },
  example: ({ variant, size, label, pill, dot }) => (
    <Badge variant={variant} size={size} pill={pill} dot={dot}>
      {label}
    </Badge>
  ),
})
