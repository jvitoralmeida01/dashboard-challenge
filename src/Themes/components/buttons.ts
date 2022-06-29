const ButtonStyles = {
  variants: {
    primary: {
      bg: 'primary.main',
      color: 'neutral.900',
      borderRadius: '8px',
      paddingTop: '0.5rem',
      paddingRight: '1.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1.5rem',
      _hover: {
        bg: 'primary.light',
        color: 'neutral.900'
      }
    },
    icon: {
      bg: 'transparent',
      color: '#959ea3',
      borderRadius: '8px',
      width: '40px',
      height: '40px',
      _hover: {
        bg: 'primary.main',
        color: 'neutral.900'
      }
    }
  }
};

export default ButtonStyles;
