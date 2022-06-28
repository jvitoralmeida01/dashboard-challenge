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
        w="100%"
        templateColumns="repeat(10, 1fr)"
      >
        <GridItem ref={sideItem} colSpan={1}>
          <Sidebar height={height} />
        </GridItem>
        <GridItem colSpan={9}>
          <Graphs />
          <Graphs />
          <Graphs />
          <Graphs />
        </GridItem>
      </Grid>
    </>
  );
}

export default DashboardPage;
