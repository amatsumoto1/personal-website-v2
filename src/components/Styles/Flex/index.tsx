import styled from 'styled-components';

type BaseFlexProps = {
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse',
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
};

export const Flex = styled.div<BaseFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

Flex.defaultProps = {
  flexWrap: 'nowrap'
}

type FlexProps = Omit<BaseFlexProps, 'flexDirection'> & {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-evenly'
};

export const FlexRow = styled(Flex).attrs({
  flexDirection: 'row'
})<FlexProps>`
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

FlexRow.defaultProps = {
  alignItems: 'center',
  justifyContent: 'flex-start' 
};

export const FlexCol = styled(Flex).attrs({
  flexDirection: 'column'
})<FlexProps>`
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

FlexCol.defaultProps = {
  alignItems: 'stretch',
  justifyContent: 'flex-start'
}