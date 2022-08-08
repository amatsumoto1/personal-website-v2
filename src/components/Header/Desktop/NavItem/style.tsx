import styled from 'styled-components';
import { NavLink as UnstyledNavLink } from 'react-router-dom';
import { createColorStyle } from '../../../Styles/utils';

export const NavItemContainer = styled.li`
  display: inline-flex;
  line-height: normal;
  padding: 0 1em;
`;

export const NavLink = styled(UnstyledNavLink)`
  display: inline-block;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  ${createColorStyle({ mainStyle: 'primary', section: 'header', focusMain: true })}

  &::after {
    position: relative;
    display: block;
    content: '';
    width: 0;
    height: 2px;
    transition: width 0.2s linear;
    background: var(--color-primary-highlighted);
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    &::after {
      width: 100%;
    }
  }
`;