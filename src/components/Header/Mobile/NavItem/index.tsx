import React from 'react';
import { NavItemInfo } from '../../../../types/header';
import { NavItemContainer, NavLink } from './style';

type Props = NavItemInfo & {
  onClick: () => void
};

const NavItem: React.FC<Props> = ({
  text,
  path,
  ariaLabel,
  onClick
}) => (
  <NavItemContainer>
    <NavLink
      to={path}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </NavLink>
  </NavItemContainer>
);

export default NavItem;