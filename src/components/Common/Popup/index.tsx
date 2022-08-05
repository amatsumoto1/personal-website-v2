import React, { useRef } from 'react';
import {  } from 'styled-components'
import { PopupContainer } from './style';
import { PageSection } from '../../Styles/utils';
import useClickOutside from '../../../hooks/useClickOutside';

type Props = {
  hide: () => void,
  hideOnClickOutside?: boolean,
  section?: PageSection,
  className?: string,
  children?: React.ReactNode,
  type?: keyof JSX.IntrinsicElements
};

const Popup: React.FC<Props> = ({
  hide,
  hideOnClickOutside = false,
  section = 'popup',
  className,
  children,
  type = 'div'
}) => {
  const ref = useRef<HTMLDivElement>(null);

  if (hideOnClickOutside) {
    useClickOutside(ref, hide);
  }

  return (
    <PopupContainer
      section={section}
      className={className}
      as={type}
      ref={ref}
    >
      {children}
    </PopupContainer>
  );
}

export default Popup;