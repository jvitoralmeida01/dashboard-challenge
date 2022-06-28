import {
  Avatar,
  Box, Container, Flex, HStack, Image, Stack, Text
} from '@chakra-ui/react';
import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import logoImagePath from '../Assets/logo.svg';

function Navbar() : React.ReactElement {
  const authContext = useAuthContext();
  return (
    <Container minHeight="8vh" minWidth="100vw" bg="neutral.900" sx={{ boxShadow: '0px 3px 6px #00000014', position: 'sticky', mb: 4 }}>
      <Flex direction="row" justify="space-between" align="center" p={2}>
        <Image h={['60px']} src={logoImagePath} />
        <HStack spacing="13px">
          <Text color="neutral.200" fontWeight="medium">{authContext.username}</Text>
          <Avatar src={authContext.avatar ?? ''} name={authContext.username ?? ''} />
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
