const InputStyles = {
  variants: {
    filled: {
      field: {
        bg: 'neutral.700',
        color: 'neutral.50',
        _hover: {
          bg: 'neutral.800',
          borderColor: 'primary.light',
          transform: 'scale(1.05)'
        },
        _focus: {
          bg: 'primary.light',
          borderColor: 'primary.light'
        }
      }
    }
  }
};

export default InputStyles;
