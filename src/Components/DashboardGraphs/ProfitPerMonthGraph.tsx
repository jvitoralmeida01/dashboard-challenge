import {
  Box, Flex, Grid, GridItem, HStack, Select, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import Card from '../Card';
import FormInput from '../FormInput';

interface Props {
  width?: string | number
}

function ProfitPerMonthGraph({ width } : Props) : React.ReactElement {
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
        stroke: 0,
        borderRadius: 5
      }
    },
    colors: ['#9FD8D5', '#F78899', '#393C56', '#E0347D'],
    fill: {
      colors: ['#9FD8D5', '#F78899', '#393C56', '#E0347D']
    },
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
    data: [39, 22, 24, 12, 55, 70, 67, 49, 20, 50, 60, 70],
    type: 'bar'
  };

  const series2 = {
    name: 'series-2',
    data: [25, 35, 52, 58, 39, 33, 35, 40, 30, 20, 12, 11],
    type: 'bar'
  };

  const series3 = {
    name: 'series-3',
    data: [65, 78, 52, 12, 35, 22, 30, 20, 12, 11, 18, 22],
    type: 'line'
  };

  const series4 = {
    name: 'series-4',
    data: [40, 30, 20, 12, 44, 32, 77, 66, 65, 64, 70, 40],
    type: 'line'
  };

  return <Chart options={options} series={[series1, series2, series3, series4]} width={width ?? '715px'} height="350px" />;
}

export default ProfitPerMonthGraph;
