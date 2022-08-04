import React from 'react';
import { HeaderContainer } from './style';
import useDetectMobile from '../../hooks/useDetectMobile';
import MobileHeader from './Mobile';
import DesktopHeader from './Desktop';

const Header: React.FC = () => {
  const HeaderComponent = useDetectMobile() ? MobileHeader : DesktopHeader;

  return (
    <HeaderContainer as="header">
      <HeaderComponent />
    </HeaderContainer>
  );
}

export default Header;