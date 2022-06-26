import {
  Avatar,
  Box,
  Container, Flex, Grid, GridItem, Heading, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Graphs from '../Components/Graphs';
import Navbar from '../Components/Navbar';
import useAuthContext from '../Hooks/useAuthContext';

function DashboardPage() : React.ReactElement {
  const authContext = useAuthContext();

  if (!authContext.isLogged) return <Navigate to="/login" />;
  return (
    <Box w="100vw" h="100vh" bg="red.100">
      <Navbar />
    </Box>
  );
}

export default DashboardPage;

// eslint-disable-next-line no-lone-blocks
{ /* <Grid
        boxSize="100%"
        templateRows="repeat(20, 1fr)"
        templateColumns="repeat(20, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={22} bg="green.200">
          <Navbar />
        </GridItem>
        <GridItem rowSpan={20} colSpan={2} bg="tomato" />
        <GridItem rowSpan={20} colSpan={20} bg="papayawhip">
          <Graphs />
        </GridItem>
      </Grid> */ }
