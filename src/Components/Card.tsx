import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const getRoundedByVariant = (variant:string|undefined) : string => {
  switch (variant) {
    case 'small': return '15px';
    case 'medium': return '12px';
    case 'large': return '20px';
    default: return '15px';
  }
};

const getPaddingByVariant = (variant:string|undefined) : string => {
  switch (variant) {
    case 'small': return '25px 16px';
    case 'medium': return '25px 24px';
    case 'large': return '55px 40px';
    default: return '25px 16px';
  }
};

type Props = {
  children?: any,
  rounded?: string,
  width?: number,
  height?: number,
  minWidth?: number | string,
  minHeight?: number | string,
  maxWidth?: number | string,
  maxHeight?: number | string,
  variant?: 'small' | 'medium' | 'large'
}

function Card({
  children, rounded, width, height, minWidth, minHeight, maxWidth, maxHeight, variant
}: Props) : React.ReactElement {
  return (
    <Box
      bg="neutral.900"
      w={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      h={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      rounded={rounded ?? getRoundedByVariant(variant)}
      p={getPaddingByVariant(variant)}
    >
      {children}
    </Box>
  );
}

export default Card;
