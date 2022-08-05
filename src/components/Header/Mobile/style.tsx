import styled from 'styled-components';
import { FlexRow } from '../../Styles/Flex';
import Popup from '../../Common/Popup';
import { NoBulletList } from '../../Styles/Menu';

export const LogoContainer = styled(FlexRow)`
  flex-grow: 1;
`;

export const NavContainer = styled(Popup).attrs({
  section: 'header'
})`
  position: relative;
  order: 2;
  display: flex;
  width: 100%;
  flex-direction: column;
  clip-path: inset(0 0 -100% 0);
  overflow-y: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const NavItemList = styled(NoBulletList)`
  box-sizing: border-box;
  padding: 1em 2em;
`;