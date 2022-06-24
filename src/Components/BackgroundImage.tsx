import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function BackgroundImage() : React.ReactElement {
  return (
    <Box background="background" style={{ position: 'absolute', zIndex: -1, overflow: 'hidden' }} height="100vh" width="100vw">
      <Image src="/curve-patterns.svg" opacity={10} minWidth="1464px" width="100vw" />
    </Box>
  );
}

export default BackgroundImage;
