import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModals } from '../../store/modals';
import { AboutModalContainer } from './style';
import { AnimatedUnderlineLink } from '../Styles/Common';

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
      <p>
        This website was built using React/Redux with styled components.
      </p>
      <p>
        The source code for this website is available in it's{' '}
        <AnimatedUnderlineLink
          section="modal"
          href="https://github.com/amatsumoto1/personal-website-v2"
          target="_blank"
          aria-label="Website Github Repository"
        >
          Github repository
        </AnimatedUnderlineLink>
        .
      </p>
    </AboutModalContainer>
  );
}

export default AboutModal;