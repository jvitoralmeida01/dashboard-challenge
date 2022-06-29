import React from 'react';
import { HStack } from '@chakra-ui/react';
import TagCard from '../DashboardCards/TagCard';
import GraphCard from '../DashboardCards/GraphCard';
import SalesPerMonthGraph from '../DashboardGraphs/SalesPerMonthGraph';
import ProfitPerMonthGraph from '../DashboardGraphs/ProfitPerMonthGraph';
import OrdersPerMonthGraph from '../DashboardGraphs/OrdersPerMonthGraph';

function SalesSection() : React.ReactElement {
  return (
    <HStack id="scrollable" spacing="32px" sx={{ overflowX: 'scroll' }}>
      <GraphCard title="Pedidos por mês" filter>
        <SalesPerMonthGraph />
      </GraphCard>
      <GraphCard title="Expectativa de lucro x lucro real" filter width="715px">
        <ProfitPerMonthGraph width="715px" />
      </GraphCard>
      <GraphCard title="Pedidos realizados x pedidos cancelados" filter>
        <OrdersPerMonthGraph />
      </GraphCard>
    </HStack>
  );
}

export default SalesSection;
