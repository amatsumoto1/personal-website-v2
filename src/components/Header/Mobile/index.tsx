import React, { useState, useCallback } from 'react';
import { LogoContainer, NavContainer, NavItemList } from './style';
import { NavItemInfo } from '../../../types/header';
import NavButton from './NavButton';
import NavItem from './NavItem';

type Props = {
  navLinks: NavItemInfo[],
}

const MobileHeader: React.FC<Props> = ({ navLinks }) => {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleNavExpanded = useCallback(() => {
    setNavExpanded(!navExpanded);
  }, [
    navExpanded,
    setNavExpanded
  ]);

  const hideNav = useCallback(() => {
    setNavExpanded(false);
  }, [
    setNavExpanded
  ]);

  return (
    <>
        <NavButton
          onClick={toggleNavExpanded}
          expanded={navExpanded}
        />
        {
          navExpanded &&
          <NavContainer
            hide={hideNav}
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
    </>
  );
}

export default MobileHeader;