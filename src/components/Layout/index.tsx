import React from 'react';
import { MainContentContainer } from './style';
import Header from '../Header';
import Modals from './Modals';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <MainContentContainer>
      {children}
    </MainContentContainer>
    <Modals />
  </>
);

export default Layout;