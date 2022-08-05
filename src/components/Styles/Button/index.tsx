import styled, { css } from 'styled-components';
import {
  createHighlightedBackgroundStyle,
  createMainColorStyle,
  PageSection
} from '../utils';

export type ButtonVariant =
'default' |
'borderless' |
'circular';


const BaseButton = styled.button`
  cursor: pointer;
  font-size: var(--font-size-default);
  border-radius: var(--border-radius-button);
  background: transparent;
  box-sizing: border-box;

  &:disabled {
    cursor: default;
  }
`;

type ButtonProps = {
  variant?: ButtonVariant,
  section?: PageSection
};

const createButtonStyle = ({
  variant = 'default',
  section = 'main',
}: ButtonProps) => {
  switch (variant) {
    case 'borderless':
      return css`
        border-style: none;
        ${createMainColorStyle('primary')}
        ${createHighlightedBackgroundStyle(section)}
      `;
    case 'circular':
      return css`
        border-style: none;
        border-radius: 50%;
        ${createMainColorStyle('primary')}
        ${createHighlightedBackgroundStyle(section)}
      `;
    case 'default':
    default:
      return css`
        ${createMainColorStyle('primary')}
        ${createHighlightedBackgroundStyle(section)}
      `;
  }
};

export const Button = styled(BaseButton)<ButtonProps>`
  ${createButtonStyle}
`;