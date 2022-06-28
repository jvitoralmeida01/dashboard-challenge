import {
  Avatar,
  Box,
  Container, Flex, Grid, GridItem, Spacer, HStack, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Graphs from '../Components/Graphs';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import useAuthContext from '../Hooks/useAuthContext';

function DashboardPage() : React.ReactElement {
  const authContext = useAuthContext();
  const sideItem = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(0);

  React.useEffect(() => {
    if (sideItem.current) {
      setHeight(sideItem.current.clientHeight);
    }
  }, [sideItem?.current?.clientHeight]);

  if (!authContext.isLogged) return <Navigate to="/login" />;
  return (
    <>
      <Navbar />
      <Spacer />
      <Grid
        w="100vw"
        templateColumns="repeat(10, 1fr)"
        gap={4}
      >
        <GridItem ref={sideItem} colSpan={1} bg="tomato">
          <Sidebar height={height} />
        </GridItem>
        <GridItem colSpan={9} bg="papayawhip" />
      </Grid>
    </>
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
