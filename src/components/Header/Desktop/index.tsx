import React, { useState, useCallback } from 'react';
import {
  HeaderContainer,
  NavContainer,
  NavItemList
} from './style';
import { NavItemInfo } from '../../../types/header';
import NavItem from './NavItem';
import Settings from '../Settings';

type Props = {
  navLinks: NavItemInfo[]
}

const DesktopHeader: React.FC<Props> = ({ navLinks }) => {
  const [settingsMenuExpanded, setSettingsMenuExpanded] = useState(false);

  const toggleSettingsMenu = useCallback(() => {
    setSettingsMenuExpanded(!settingsMenuExpanded);
  }, [
    settingsMenuExpanded,
    setSettingsMenuExpanded
  ]);

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
      <Settings
        expanded={settingsMenuExpanded}
        toggleExpanded={toggleSettingsMenu}
      />
    </HeaderContainer>
  ); 
}

export default DesktopHeader;