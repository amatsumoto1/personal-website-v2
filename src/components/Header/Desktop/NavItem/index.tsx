import React, { memo } from 'react';
import { NavItemContainer, NavLink } from './style';
import { NavItemInfo } from '../../../../types/header';

const NavItem: React.FC<NavItemInfo> = ({
  text,
  path,
  ariaLabel
}) => (
  <NavItemContainer>
    <NavLink to={path} aria-label={ariaLabel}>
      {text}
    </NavLink>
  </NavItemContainer>
);

export default memo(NavItem);