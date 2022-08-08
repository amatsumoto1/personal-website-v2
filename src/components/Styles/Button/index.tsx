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
  section?: PageSection,
  ignoreHighlight?: boolean
};

const createButtonStyle = ({
  variant = 'default',
  section = 'main',
  ignoreHighlight = false
}: ButtonProps) => {
  switch (variant) {
    case 'borderless':
      return css`
        border-style: none;
        ${createMainColorStyle('primary')}
        ${!ignoreHighlight && createHighlightedBackgroundStyle(section)}
      `;
    case 'circular':
      return css`
        border-style: none;
        border-radius: 50%;
        ${createMainColorStyle('primary')}
        ${!ignoreHighlight && createHighlightedBackgroundStyle(section)}
      `;
    case 'default':
    default:
      return css`
        ${createMainColorStyle('primary')}
        ${!ignoreHighlight && createHighlightedBackgroundStyle(section)}
      `;
  }
};

export const Button = styled(BaseButton)<ButtonProps>`
  ${createButtonStyle}
`;