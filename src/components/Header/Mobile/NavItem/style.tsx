import styled from 'styled-components';
import { NavLink as UnstyledNavLink } from 'react-router-dom';
import { createHighlightedBackgroundStyle, createMainColorStyle } from '../../../Styles/utils';

const NavItemHeight = '2em';

export const NavItemContainer = styled.li`
  width: 100%;
  height: ${NavItemHeight};
  line-height: ${NavItemHeight};
  font-weight: bold;
  font-size: 0.9em;
  ${createHighlightedBackgroundStyle('header')}
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const NavLink = styled(UnstyledNavLink)`
  display: block;
  border: none;
  outline: none;
  text-decoration: none;
  ${createMainColorStyle('primary')}
`;