import styled from 'styled-components';
import { FlexRow } from '../../Styles/Flex';
import Popup from '../../Common/Popup';
import { NoBulletList } from '../../Styles/Menu';
import { HEADER_HEIGHT, HEADER_NAV_EXPAND_COLLAPSE_TIME } from '../../../constants/layout';

export const LogoContainer = styled(FlexRow)`
  flex-grow: 1;
`;

type NavContainerProps = {
  expanded: boolean
};

export const NavContainer = styled(Popup).attrs({
  section: 'header'
})<NavContainerProps>`
  position: relative;
  order: 2;
  display: flex;
  width: 100%;
  flex-direction: column;
  clip-path: inset(0 0 -100% 0);
  overflow-y: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: max-height ${HEADER_NAV_EXPAND_COLLAPSE_TIME} ease-in-out;
  max-height: ${({ expanded }) => expanded ? '100vh' : '0' };
`;

export const NavItemList = styled(NoBulletList)`
  box-sizing: border-box;
  padding: 1em 2em;
`;

export const SettingsPlaceholder = styled.div`
  width: ${HEADER_HEIGHT};
  height: ${HEADER_HEIGHT};
`;