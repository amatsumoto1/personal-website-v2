import styled from 'styled-components';
import { createBackgroundStyle } from '../../../Styles/utils';
import { HEADER_NAV_EXPAND_COLLAPSE_TIME } from '../../../../constants/layout';

type NavButtonLineProps = {
  expanded: boolean
};

const NavButtonLine = styled.span<NavButtonLineProps>`
  ${createBackgroundStyle('primary')}
  position: absolute;
  height: 2px;
  width: 14px;
  transition: transform ${HEADER_NAV_EXPAND_COLLAPSE_TIME} cubic-bezier(0.04, 0.04, 0.12, 0.96),
              background-color ${HEADER_NAV_EXPAND_COLLAPSE_TIME} cubic-bezier(0.04, 0.04, 0.12, 0.96);
`;

export const NavButtonLineTopLeft = styled(NavButtonLine)`
  top: 14px;
  left: 14px;
  ${({ expanded }) => expanded && 'transform: matrix(0.71, 0.71, -0.71, 0.71, 2, 8);'}
`;

export const NavButtonLineTopRight = styled(NavButtonLine)`
  top: 14px;
  right: 14px;
  ${({ expanded }) => expanded && 'transform: matrix(0.71, -0.71, 0.71, 0.71, -2, 8);'}
`;

export const NavButtonLineMiddleLeft = styled(NavButtonLine)`
  top: 26px;
  left: 14px;
  ${({ expanded }) => expanded && 'background: transparent;'}
`;

export const NavButtonLineMiddleRight = styled(NavButtonLine)`
  top: 26px;
  right: 14px;
  ${({ expanded }) => expanded && 'background: transparent;'}
`;

export const NavButtonLineBottomLeft = styled(NavButtonLine)`
  top: 40px;
  left: 14px;
  ${({ expanded }) => expanded && 'transform: matrix(0.71, -0.71, 0.71, 0.71, 2, -8);'}
`;

export const NavButtonLineBottomRight = styled(NavButtonLine)`
  top: 40px;
  right: 14px;
  ${({ expanded }) => expanded && 'transform: matrix(0.71, 0.71, -0.71, 0.71, -2, -8);'};
`;