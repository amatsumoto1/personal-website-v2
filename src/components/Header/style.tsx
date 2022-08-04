import styled from 'styled-components';
import { FlexRow } from '../Styles/Flex';
import { shadowStyle } from '../Styles/Common';
import { createColorStyle } from '../Styles/utils';
import { HEADER_HEIGHT, ZIndexes } from '../../constants/layout';
import { Button } from '../Styles/Button';

export const HeaderContainer = styled(FlexRow)`
  position: fixed;
  top: 0;
  left: 0;
  height: ${HEADER_HEIGHT};
  line-height: ${HEADER_HEIGHT};
  width: 100%;
  z-index: ${ZIndexes.HEADER};
  ${createColorStyle({ section: 'header' })}
  ${shadowStyle}
`;

export const HeaderButton = styled(Button).attrs({
  variant: 'borderless',
  section: 'header'
})`
  height: 100%;
  width: ${HEADER_HEIGHT};
  padding: 0;
`;

