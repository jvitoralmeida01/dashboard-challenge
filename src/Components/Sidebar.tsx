import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Container, Divider, Icon, IconButton, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import logoImagePath from '../Assets/logo.svg';

interface Props {
  height : number | null | undefined
}

function Sidebar({ height } : Props) : React.ReactElement {
  const sidebarStyle = {
    position: 'sticky',
    top: 4,
    borderRadius: '8px',
    boxShadow: '0px 3px 6px #00000029',
    height: '90vh'
  };

  return (
    <Container height={`${height}px`} width="120px" sx={{ position: 'absolute' }}>
      <Box background="neutral.900" sx={sidebarStyle}>
        <VStack spacing="22px" padding="24px">
          <IconButton height="40px" aria-label="hamburguer-icon">
            <Text>Home</Text>
          </IconButton>
          <Divider />
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
          <IconButton aria-label="hamburguer-icon">
            <HamburgerIcon />
          </IconButton>
        </VStack>
      </Box>
    </Container>
  );
}

export default Sidebar;
