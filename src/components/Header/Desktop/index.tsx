import React from 'react';
import {
  HeaderContainer,
  NavContainer,
  NavItemList
} from './style';
import { NavItemInfo } from '../../../types/header';
import NavItem from './NavItem';

type Props = {
  navLinks: NavItemInfo[]
}

const DesktopHeader: React.FC<Props> = ({ navLinks }) => {
 return (
  <HeaderContainer>
    <NavContainer as="nav">
      <NavItemList>
        {
          navLinks.map(navLink =>
            <NavItem
              key={navLink.path}
              {...navLink}
            />
          )
        }
      </NavItemList>
    </NavContainer>
  </HeaderContainer>
 ); 
}

export default DesktopHeader;