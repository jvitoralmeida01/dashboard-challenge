import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack, Tag, Text, VStack
} from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';

type Props = {
  title?: string,
  tag?: string,
  tagDescription?: string,
  footer?: string,
  footerPrefix?: string,
  footerSuffix?: string,
  color?: string,
  endIcon?: boolean
}

function TagCard({
  title, tag, tagDescription, footer, footerPrefix, footerSuffix, color, endIcon
}: Props) : React.ReactElement {
  return (
    <Card variant="small" minHeight="168px" minWidth="232px">
      <VStack align="start">
        { title
          ? (
            <HStack width="100%" justify="space-between">
              <Text fontSize="16px" fontWeight="bold" color="neutral.200">{title}</Text>
              { endIcon ? <ChevronRightIcon boxSize="20px" /> : null }
            </HStack>
          ) : (
            <Box height="16px" />
          )}
        { tag ? <Tag variant="rounded" color={color ?? 'positive'}>{tag}</Tag> : <Box height="20px" />}
        { tagDescription ? <Text fontSize="14px" fontWeight="regular" color={color ?? 'positive'}>{tagDescription}</Text> : <Box height="18px" />}
        <HStack>
          <Text fontWeight="regular" fontSize="16px" color="neutral.200">{footerPrefix}</Text>
          <Text fontWeight="bold" fontSize="20px" color="neutral.200">{footer}</Text>
          <Text fontWeight="regular" fontSize="16px" color="neutral.200">{footerSuffix}</Text>
        </HStack>
      </VStack>
    </Card>
  );
}

export default TagCard;
