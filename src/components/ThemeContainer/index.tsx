import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style';
import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../../selectors/theme';

type Props = {
  children: React.ReactNode
};

const ThemeContainer: React.FC<Props> = ({ children }) => {
  const currentTheme = useSelector(getCurrentTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;