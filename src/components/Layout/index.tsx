import React from 'react';
import { MainContentContainer } from './style';
import Header from '../Header';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <MainContentContainer>
      {children}
    </MainContentContainer>
  </>
);

export default Layout;