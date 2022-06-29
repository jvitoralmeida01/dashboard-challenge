import {
  Avatar, Box, Container, HStack, Stat, StatHelpText, StatLabel, StatNumber, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import useAuthContext from '../../Hooks/useAuthContext';
import Card from '../Card';
import TagCard from '../DashboardCards/TagCard';
import '../../Themes/styles/Scrollable.css';

function StartSection() : React.ReactElement {
  const authContext = useAuthContext();
  return (
    <>
      <Text fontWeight="bold" fontSize="28px" color="neutral.200" mt="18px" mb="18px" ml="28px">Início</Text>
      <HStack id="scrollable" spacing="32px" sx={{ overflowX: 'scroll' }}>
        <TagCard title="Ticket médio últimas 24h" tag="+ 15 %" tagDescription="em relação a ontem" footerPrefix="R$" footer="9.292,00" color="positive" />
        <TagCard title="Ticket médio mensal" tag="+ 15 %" tagDescription="em relação a julho" footerPrefix="R$" footer="129.292,00" color="positive" />
        <TagCard title="Produtos em manutenção" tag="há 5 dias" footer="8" footerSuffix="produtos" color="negative" />
        <TagCard title="Acabando o estoque" tag="há 5 dias" tagDescription="repor o quanto antes" footer="10" footerSuffix="produtos" color="negative" endIcon />
        <TagCard title="Pedidos realizados no mês" tag="+ 15 %" tagDescription="em relação a julho" footer="10" footerSuffix="pedidos" color="positive" />
        <TagCard title="Produtos vendidos no mês" tag="+ 15 %" tagDescription="em relação a julho" footer="23" footerSuffix="produtos" color="positive" />
      </HStack>
    </>
  );
};

export default StartSection;
