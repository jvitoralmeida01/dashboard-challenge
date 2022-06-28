import { HStack } from '@chakra-ui/react';
import React from 'react';
import TagCard from '../DashboardCards/TagCard';

function FunnelSection() : React.ReactElement {
  return (
    <HStack id="scrollable" spacing="32px" sx={{ overflowX: 'scroll' }}>
      <TagCard title="Sessões" tag="+ 15 %" tagDescription="em relação a ontem" footerPrefix="R$" footer="9.292,00" color="positive" />
      <TagCard title="Visualizações de Produto" tag="+ 15 %" tagDescription="em relação a julho" footerPrefix="R$" footer="129.292,00" color="positive" />
      <TagCard title="Conversão para a página de produtos" tag="há 5 dias" tagDescription="em relação a julho" footer="8" footerSuffix="produtos" color="positive" />
      <TagCard title="Adições ao Carrinho" tag="há 5 dias" tagDescription="repor o quanto antes" footer="10" footerSuffix="produtos" color="positive" endIcon />
      <TagCard title="Checkout - Frete" tag="+ 15 %" tagDescription="em relação a julho" footer="10" footerSuffix="pedidos" color="positive" />
      <TagCard title="Checkout - E-mail" tag="+ 15 %" tagDescription="em relação a julho" footer="23" footerSuffix="produtos" color="positive" />
      <TagCard title="Checkout - Cadastro" tag="+ 15 %" tagDescription="em relação a julho" footer="23" footerSuffix="produtos" color="positive" />
      <TagCard title="Checkout - Entrega" tag="+ 15 %" tagDescription="em relação a julho" footer="23" footerSuffix="produtos" color="positive" />
      <TagCard title="Checkout - Pagamento" tag="+ 15 %" tagDescription="em relação a julho" footer="23" footerSuffix="produtos" color="positive" />
    </HStack>
  );
}

export default FunnelSection;
