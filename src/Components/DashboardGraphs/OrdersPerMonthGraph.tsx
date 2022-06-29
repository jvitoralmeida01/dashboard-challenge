import {
  Box, Flex, Grid, GridItem, HStack, Select, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import Card from '../Card';
import FormInput from '../FormInput';

function OrdersPerMonth() : React.ReactElement {
  const options = {
    chart: {
      id: 'apexchart-line',
      stacked: false
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
    colors: ['#109E8E', '#F18F7F'],
    fill: {
      colors: ['#109E8E', '#F18F7F']
    },
    stroke: { show: false },
    legends: {
      position: 'top',
      horizontalAlign: 'start'
    },
    dataLabels: {
      style: {
        colors: ['transparent']
      }
    }
  };

  const series1 = {
    name: 'series-1',
    data: [39, 22, 24, 12, 55, 70, 67, 49, 20, 50, 60, 70]
  };

  const series2 = {
    name: 'series-2',
    data: [25, 35, 52, 58, 39, 33, 35, 40, 30, 20, 12, 11]
  };

  return <Chart options={options} series={[series1, series2]} type="bar" width="600px" height="350px" />;
}

export default OrdersPerMonth;
