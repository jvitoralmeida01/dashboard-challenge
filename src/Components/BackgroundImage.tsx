import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import curvePatterns from '../Assets/curve-patterns.svg';

function BackgroundImage() : React.ReactElement {
  return (
    <Box background="background" style={{ position: 'fixed', zIndex: -1, overflow: 'hidden' }} height="100vh" width="100vw">
      <div style={{
        backgroundImage: `url(${curvePatterns})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      }}
      />
    </Box>
  );
}

export default BackgroundImage;
