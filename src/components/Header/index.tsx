import React, { Suspense, lazy } from 'react';
import { HeaderContainer } from './style';
import useDetectMobile from '../../hooks/useDetectMobile';
import { NavLinks } from '../../data/header';
import MobileHeader from './Mobile';

const DesktopHeader = lazy(() => import('./Desktop'));

const Header: React.FC = () => {
  const mobileHeaderComponent = <MobileHeader navLinks={NavLinks}  />;
  const isMobile = useDetectMobile();
  
  let headerComponent = mobileHeaderComponent;
  if (!isMobile) {
    headerComponent = <DesktopHeader navLinks={NavLinks} />;
  }

  return (
    <HeaderContainer
      as="header"
    >
      <Suspense fallback={mobileHeaderComponent}>
        {headerComponent}
      </Suspense>
    </HeaderContainer>
  );
}

export default Header;