import React, { memo } from 'react';
import { NavItemContainer, NavLink } from './style';
import { NavItemInfo } from '../../../../types/header';

const NavItem: React.FC<NavItemInfo> = ({
  text,
  path,
  ariaLabel
}) => {

  const onClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
  }

  return (
    <NavItemContainer>
      <NavLink
        to={path}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {text}
      </NavLink>
  </NavItemContainer>
  )
}

export default memo(NavItem);