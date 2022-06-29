import {
  Box, Flex, Grid, GridItem, HStack, Select, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import Card from '../Card';
import FormInput from '../FormInput';

type Props = {
  title?: string,
  filter?: boolean,
  width?: string | number,
  children?: React.ReactNode
}

function GraphCard({
  title, filter, width, children
}: Props) : React.ReactElement {
  return (
    <Card variant="medium" minHeight="400px" minWidth={width ?? '600px'}>
      <VStack>
        <Grid width="100%" templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={2}><Text fontSize="19px" fontWeight="bold" color="#333333">{title}</Text></GridItem>
          <GridItem colSpan={1}>{ filter ? <Select variant="filled" placeholder="Ano" isReadOnly>{null}</Select> : null }</GridItem>
        </Grid>
        {children}
      </VStack>
    </Card>
  );
}

export default GraphCard;
