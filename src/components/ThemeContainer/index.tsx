import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style';
import { basicTheme } from '../../themes';

type Props = {
  children: React.ReactNode
};

const ThemeContainer: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={basicTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;