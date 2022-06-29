/* eslint-disable react/no-array-index-key */
import { HamburgerIcon } from '@chakra-ui/icons';
import { RiHomeLine } from 'react-icons/ri';
import { HiMenuAlt2, HiOutlineCreditCard } from 'react-icons/hi';
import { ImStack } from 'react-icons/im';
import { BsTruck } from 'react-icons/bs';
import {
  FiShoppingCart, FiMessageSquare, FiHexagon, FiTool
} from 'react-icons/fi';
import { AiTwotoneTool } from 'react-icons/ai';
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

  const icons = [
    HiMenuAlt2,
    RiHomeLine,
    ImStack,
    FiTool,
    BsTruck,
    FiShoppingCart,
    HiOutlineCreditCard,
    FiMessageSquare,
    FiHexagon
  ];

  return (
    <Container height={`${height}px`} width="120px" sx={{ position: 'absolute' }}>
      <Box background="neutral.900" sx={sidebarStyle}>
        <VStack spacing="22px" padding="24px">
          {
            icons.map((icon, index) => {
              let divider = null;
              if (index === 1) divider = <Divider key={`sidebar-divider-${index}`} />;
              return (
                <>
                  {divider}
                  <IconButton key={`sidebar-icon-${index}`} variant="icon" aria-label="sidebar-icon">
                    <Icon as={icon} height="22px" width="22px" />
                  </IconButton>
                </>
              );
            })
          }
        </VStack>
      </Box>
    </Container>
  );
}

export default Sidebar;
