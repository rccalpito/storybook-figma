import figma from '@figma/code-connect'
import { Input } from './Input'

figma.connect(Input, 'https://www.figma.com/design/PLACEHOLDER/ui-kit?node-id=INPUT', {
  props: {
    label: figma.string('Label'),
    placeholder: figma.string('Placeholder'),
    helperText: figma.string('Helper Text'),
    error: figma.string('Error'),
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    required: figma.boolean('Required'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ label, placeholder, helperText, error, size, required, disabled }) => (
    <Input
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      size={size}
      required={required}
      disabled={disabled}
    />
  ),
})
