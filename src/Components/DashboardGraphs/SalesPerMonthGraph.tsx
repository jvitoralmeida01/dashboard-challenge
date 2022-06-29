import {
  Box, Center, Flex, Grid, GridItem, HStack, Select, Skeleton, Spinner, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import useGraphDataContext from '../../Hooks/useGraphDataContext';
import useToastSystem from '../../Hooks/useToastSystem';

function SalesPerMonthGraph() : React.ReactElement {
  const graphDataContext = useGraphDataContext();
  const toastSystem = useToastSystem();
  const [salesData, setSalesData] = React.useState<Array<number>>([]);

  React.useEffect(() => {
    graphDataContext.getSalesData().then(
      (data : Array<any>) => {
        const values : Array<number> = data.map((item : any) : number => item.value);
        setSalesData(values);
      }
    ).catch((e:Error) => toastSystem.error(e));
  }, []);

  const options = {
    chart: {
      id: 'apexchart-line'
    },
    xaxis: {
      categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    },
    yaxis: { show: false },
    grid: {
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 5
      }
    },
    fill: {
      colors: ['#393C56']
    },
    stroke: { show: false },
    dataLabels: {
      style: {
        colors: ['transparent']
      }
    }
  };

  const data = {
    name: 'series-1',
    data: salesData
  };

  return (
    <>
      { salesData.length === 0 ? <Center><Spinner size="lg" /></Center> : null }
      <Chart options={options} series={salesData.length !== 0 ? [{ name: 'Sales data', data: salesData }] : []} type="bar" width="600px" height="350px" />
      ;
    </>
  );
}

export default SalesPerMonthGraph;
