import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Flex } from '../../Styles/Flex';
import { PageSection, createColorStyle } from '../../Styles/utils';

export const SelectContainer = styled(Flex)<{
  section: PageSection
}>`
  ${createColorStyle}
  padding: 0.5em 0;
`;

export const SelectLabel = styled.label<{
  extraStyles?: FlattenSimpleInterpolation
}>`
  font-size: 1em;
  font-weight: 600;
  line-height: 1.75em;
  padding-right: 1em;
  ${({ extraStyles }) => extraStyles}
`;

export const SelectWrapper = styled.select<{
  section: PageSection,
  extraStyles?: FlattenSimpleInterpolation
}>`
  font-size: 1em;
  font-weight: 400;
  padding: 0.2em;
  border-radius: var(--border-radius-default);
  border-color: var(--color-primary);
  ${createColorStyle}
  ${({ extraStyles }) => extraStyles}

  option {
    ${createColorStyle}
  }
`;