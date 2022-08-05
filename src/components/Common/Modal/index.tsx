import React from 'react';
import { createPortal } from 'react-dom';
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalCloseButton
} from './style';
import { FlexRow } from '../../Styles/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  name: string,
  title: string,
  close: () => void,
  className?: string,
  children?: React.ReactNode
};

const modalNode = document.getElementById('modal-root') as HTMLElement;

const Modal: React.FC<Props> = ({
  name,
  title,
  close,
  className,
  children
}) => {
  const modalHeaderId = `${name}-title`;
  const capitalizedName = name ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}` : 'Modal';
  const modalButtonAriaLabel = `Close ${capitalizedName}`;

  const modalComponent = (
    <ModalOverlay>
      <ModalContainer
        role="dialog"
        tabIndex={-1}
        aria-modal={true}
        aria-labelledby={undefined}
        className={className}
      >
        <FlexRow>
          <ModalTitle
            as="h1"
            id={modalHeaderId}
          >
            {title}
          </ModalTitle>
          <ModalCloseButton
            type="button"
            aria-label={modalButtonAriaLabel}
            onClick={close}
          >
            <FontAwesomeIcon icon={faTimes} />
          </ModalCloseButton>
        </FlexRow>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );

  return createPortal(modalComponent, modalNode);
};

export default Modal;