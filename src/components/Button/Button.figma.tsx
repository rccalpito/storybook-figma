import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(Button, 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=BUTTON', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
      Outline: 'outline',
      Ghost: 'ghost',
      Destructive: 'destructive',
    }),
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    label: figma.string('Label'),
    disabled: figma.boolean('Disabled'),
    loading: figma.boolean('Loading'),
  },
  example: ({ variant, size, label, disabled, loading }) => (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
    >
      {label}
    </Button>
  ),
})
