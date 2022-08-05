import styled from 'styled-components';
import { FlexRow } from '../../Styles/Flex';
import { NoBulletList } from '../../Styles/Menu';

export const HeaderContainer = styled(FlexRow).attrs({
  alignItems: "flex-start",
  justifyContent: "center"
})`
  height: 100%;
  width: 100%;
  max-width: 80em;
`;

export const NavContainer = styled.nav`
  flex-grow: 1;
`;

export const NavItemList = styled(NoBulletList)`
  
`;