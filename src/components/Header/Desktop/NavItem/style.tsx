import styled from 'styled-components';
import { NavLink as UnstyledNavLink } from 'react-router-dom';
import { createMainColorStyle } from '../../../Styles/utils';

export const NavItemContainer = styled.li`
  display: inline-flex;
  padding: 0 1em;
`;

export const NavLink = styled(UnstyledNavLink)`
  display: block;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  ${createMainColorStyle('primary', true)}

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    text-decoration: underline;
  }
`;