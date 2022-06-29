import { extendTheme } from '@chakra-ui/react';
import ButtonStyles from './components/buttons';
import InputStyles from './components/inputs';
import AvatarStyles from './components/avatars';
import TagStyles from './components/tags';
import SelectStyles from './components/selects';

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
    },
    positive: '#109E8E',
    negative: '#D6628E'
  },
  components: {
    Button: ButtonStyles,
    Input: InputStyles,
    Select: SelectStyles,
    Avatar: AvatarStyles,
    Tag: TagStyles
  }
});

export default lightTheme;
