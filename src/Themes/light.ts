import { extendTheme } from '@chakra-ui/react';

const lightTheme = extendTheme({
  colors: {
    primary: '#5A4CA7',
    background: '#F6F6F9',
    neutral: {
      0: '#1E252B',
      10: '#333333',
      20: '#4E5D66',
      80: '#F3F5F6',
      90: '#F6F6F9',
      100: '#FFFFFF'
    }
  }
});

export default lightTheme;
