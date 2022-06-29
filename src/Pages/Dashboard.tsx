import {
  Avatar,
  Box,
  Container, Flex, Grid, GridItem, Spacer, HStack, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import FunnelSection from '../Components/DashboardSections/FunnelSection';
import SalesSection from '../Components/DashboardSections/SalesSection';
import StartSection from '../Components/DashboardSections/StartSection';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { GraphDataProvider } from '../Contexts/GraphDataProvider';
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

  const textTitleStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'primary.main',
    mt: '24px',
    mb: '24px',
    ml: '28px'
  };

  if (!authContext.isLogged) return <Navigate to="/login" />;
  return (
    <GraphDataProvider>
      <Navbar />
      <Spacer />
      <Grid
        w="100%"
        templateColumns="repeat(10, 1fr)"
      >
        <GridItem ref={sideItem} colSpan={1}>
          <Sidebar height={height} />
        </GridItem>
        <GridItem colSpan={9} mb={6}>
          <StartSection />
          <Text sx={textTitleStyle}>Dashboard de Vendas</Text>
          <SalesSection />
          <Text sx={textTitleStyle}>Funil de Conversão</Text>
          <FunnelSection />
        </GridItem>
      </Grid>
    </GraphDataProvider>
  );
}

export default DashboardPage;
