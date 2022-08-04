import { css } from 'styled-components';

export type PageSection =
'main' |
'header' |
'modal' |
'popup';

export type MainColorStyle =
'primary' |
'link';

export type BackgroundColorStype = PageSection |
'primary';

export const createMainColorStyle = (colorStyle: MainColorStyle, focusable: boolean = false) => {
  const variableName = (colorStyle === 'link') ? '--color-link' : '--color-primary';

  return css`
    color: var(${variableName});

    ${focusable && createHighlightedMainStyle(colorStyle)}
  `;
}

export const createBackgroundStyle = (colorStyle: BackgroundColorStype, focusable: boolean = false) => {
  let variableName;

  switch (colorStyle) {
    case 'header':
      variableName = '--color-header';
      break;
    case 'modal':
      variableName = '--color-modal';
      break;
    case 'popup':
      variableName = '--color-popup';
      break;
    case 'primary':
      variableName = '--color-primary';
      break;
    case 'main':
    default:
      variableName = '--color-secondary';
  }

  return css`
    background: var(${variableName});

    ${focusable && createHighlightedBackgroundStyle(colorStyle)}
  `;
}

const getHighlightedMainColorStyle = (colorStyle: MainColorStyle) => {
  let variableName;

  switch (colorStyle) {
    case 'primary':
      variableName = '--color-primary-highlighted';
      break;
    case 'link':
    default:
      variableName = '--color-link-highlighted';
      break;
  }

  return `color: var(${variableName});`;
}

export const createHighlightedMainStyle = (colorStyle: MainColorStyle) => {
  return css`
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      ${getHighlightedMainColorStyle(colorStyle)};
    }
  `;
}

export const getHighlightedBackgroundColorStyle = (colorStyle: BackgroundColorStype) => {
  let variableName;

  switch (colorStyle) {
    case 'header':
      variableName = '--color-header-highlighted';
      break;
    case 'modal':
      variableName = '--color-modal-highlighted';
      break;
    case 'popup':
      variableName = '--color-popup-highlighted';
      break;
    case 'primary':
      variableName = '--color-primary-highlighted';
      break;
    case 'main':
    default:
      variableName = '--color-secondary-highlighted';
      break;
  }

  return `background: var(${variableName});`
}

export const createHighlightedBackgroundStyle = (colorStyle: BackgroundColorStype) => {
  return css`
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      ${getHighlightedBackgroundColorStyle(colorStyle)}
    }
  `;
}

export type ColorStyleSettings = {
  mainStyle?: MainColorStyle,
  section?: PageSection,
  focusMain?: boolean,
  focusBackground?: boolean
};

export const createColorStyle = ({
  mainStyle = 'primary',
  section = 'main',
  focusMain = false,
  focusBackground = false
}: ColorStyleSettings) => css`
  ${createMainColorStyle(mainStyle)}
  ${createBackgroundStyle(section)}

  ${
    (focusMain || focusBackground) &&
    css`
      &:not(:disabled):hover,
      &:not(:disabled):focus {
        ${focusMain && getHighlightedMainColorStyle(mainStyle)}
        ${focusBackground && getHighlightedBackgroundColorStyle(section)}
      }
    `
  }
`;