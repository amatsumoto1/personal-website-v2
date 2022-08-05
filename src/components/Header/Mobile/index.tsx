import React, { useState, useCallback } from 'react';
import { LogoContainer, NavContainer, NavItemList, SettingsPlaceholder } from './style';
import { NavItemInfo } from '../../../types/header';
import { HEADER_NAV_EXPAND_COLLAPSE_TIME_MS } from '../../../constants/layout';
import NavButton from './NavButton';
import NavItem from './NavItem';
import Settings from '../Settings';

type Props = {
  navLinks: NavItemInfo[],
}

const MobileHeader: React.FC<Props> = ({ navLinks }) => {
  const [showNav, setShowNav] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const [settingsMenuExpanded, setSettingsMenuExpanded] = useState(false);

  const expandNav = () => {
    setShowNav(true);
    setTimeout(() => {
      setNavExpanded(true);  
    });
  }

  const collapseNav = () => {
    setNavExpanded(false);
    setTimeout(() => {
      setShowNav(false);
    }, HEADER_NAV_EXPAND_COLLAPSE_TIME_MS);
  }

  const toggleNavExpanded = useCallback(() => {
    if (!navExpanded) {
      setSettingsMenuExpanded(false);
      expandNav();
    }
    else {
      collapseNav();
    }
  
  }, [
    navExpanded,
    setSettingsMenuExpanded
  ]);

  const hideNav = useCallback(() => {
    collapseNav();
  }, []);

  const toggleSettingsMenu = useCallback(() => {
    setSettingsMenuExpanded(!settingsMenuExpanded);
  }, [
    settingsMenuExpanded,
    setSettingsMenuExpanded
  ]);

  return (
    <>
        <NavButton
          onClick={toggleNavExpanded}
          expanded={navExpanded}
        />
        {
          showNav &&
          <NavContainer
            hide={hideNav}
            expanded={navExpanded}
            type="nav"
          >
            <NavItemList>
            {
              navLinks.map(navLink =>
                <NavItem
                  key={navLink.path}
                  onClick={hideNav}
                  {...navLink}
                />
              )
            }
            </NavItemList>
          </NavContainer>
        }
      <LogoContainer>
        
      </LogoContainer>
      {
        showNav ?
        <SettingsPlaceholder /> :
        <Settings
          expanded={settingsMenuExpanded}
          toggleExpanded={toggleSettingsMenu}
        />
      }
    </>
  );
}

export default MobileHeader;