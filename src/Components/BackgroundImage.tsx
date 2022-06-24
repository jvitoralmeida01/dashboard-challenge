import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function BackgroundImage() : React.ReactElement {
  return (
    <Box background="background" style={{ position: 'absolute', zIndex: -1, overflow: 'hidden' }} h="100vh">
      <Image src="/curve-patterns.svg" opacity={10} minHeight="100vh" width="100vw" />
    </Box>
  );
}

export default BackgroundImage;
