import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModals } from '../../store/modals';
import { AboutModalContainer } from './style';

const AboutModal: React.FC = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideModals());
  };

  return (
    <AboutModalContainer
      name="about"
      title="About This Website"
      close={close}
    >

    </AboutModalContainer>
  );
}

export default AboutModal;