import React from 'react';
import { MainContentContainer } from './style';
import ThemeContainer from './ThemeContainer';
import Header from '../Header';
import Modals from './Modals';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeContainer>
    <Header />
    <MainContentContainer>
      {children}
    </MainContentContainer>
    <Modals />
  </ThemeContainer>
);

export default Layout;