import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app-root {
    height: 100%;
  }

  :root {
    ${({ theme: { colors, fontSizes, borderRadius} }) => `
      --color-primary: ${colors.primary};
      --color-primary-highlighted: ${colors.primaryHighlighted};
      --color-secondary: ${colors.secondary};
      --color-secondary-highlighted: ${colors.secondaryHighlighted};
      --color-link: ${colors.link};
      --color-link-highlighted: ${colors.linkHighlighted};
      --color-header: ${colors.header};
      --color-header-highlighted: ${colors.headerHighlighed};
      --color-modal: ${colors.modal};
      --color-modal-highlighted: ${colors.modalHighlighted};
      --color-modal-overlay: ${colors.modalOverlay};
      --color-popup: ${colors.popup};
      --color-popup-highlighted: ${colors.popupHighlighted};
      --color-shadow: ${colors.shadow};

      --font-size-default: ${fontSizes.default};

      --border-radius-default: ${borderRadius.default};
      --border-radius-button: ${borderRadius.button};
      --border-radius-modal: ${borderRadius.modal};
    `}
  }

  body {
    box-sizing: border-box;
    margin: 0;
    min-height: 100vh;
    width: 100%;
    font-family: 'Open Sans', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: var(--font-size-default);
    color: var(--color-primary);
    background: var(--color-secondary);
  }

  #app-root {
    width: 100%;
  }

  a {
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  
`;