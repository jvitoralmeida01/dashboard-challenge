import {
  Avatar, Box, Container, HStack, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';

function Graphs() : React.ReactElement {
  const authContext = useAuthContext();
  return (
    <>
      <Text fontWeight="bold" fontSize="28px" color="neutral.200" mt="18px" mb="18px" ml="28px">Início</Text>
      <HStack spacing="32px">
        <Box bg="neutral.900" w={200} h={200} rounded="12px" />
        <Box bg="neutral.900" w={200} h={200} rounded="12px" />
        <Box bg="neutral.900" w={200} h={200} rounded="12px" />
      </HStack>
    </>
  );
};

export default Graphs;
