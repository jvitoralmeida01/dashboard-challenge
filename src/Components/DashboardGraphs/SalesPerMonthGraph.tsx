import {
  Box, Flex, Grid, GridItem, HStack, Select, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import Card from '../Card';
import FormInput from '../FormInput';

function SalesPerMonthGraph() : React.ReactElement {
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

  const series1 = {
    name: 'series-1',
    data: [25, 56, 76, 58, 39, 22, 24, 55, 70, 67, 49, 20]
  };

  return <Chart options={options} series={[series1]} type="bar" width="600px" height="350px" />;
}

export default SalesPerMonthGraph;
