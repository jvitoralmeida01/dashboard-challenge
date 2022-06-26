import { extendTheme } from '@chakra-ui/react';
import ButtonStyles from './components/buttons';
import InputStyles from './components/inputs';
import AvatarStyles from './components/avatars';

const lightTheme = extendTheme({
  colors: {
    primary: {
      light: '#ada6d3',
      main: '#5A4CA7',
      dark: '#004082'
    },
    background: '#F6F6F9',
    neutral: {
      50: '#1E252B',
      100: '#333333',
      200: '#4E5D66',
      700: '#F3F5F6',
      800: '#F6F6F9',
      900: '#FFFFFF'
    }
  },
  components: {
    Button: ButtonStyles,
    Input: InputStyles,
    Avatar: AvatarStyles
  }
});

export default lightTheme;
