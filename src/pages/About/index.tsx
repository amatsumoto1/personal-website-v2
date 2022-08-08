import React from 'react';
import { AboutContainer } from './style';
import { PageHeader, AnimatedUnderlineLink } from '../../components/Styles/Common';
import Card from '../../components/Common/Card';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <PageHeader>
        About Me
      </PageHeader>
      <p>
        I am a Full-Stack Software Engineer at{' '}
        <AnimatedUnderlineLink
          section="main"
          href="https://www.rlicorp.com/"
          aria-label="RLI Corp. Website"
        >
          RLI Insurance
        </AnimatedUnderlineLink>{' '}
        building and maintaining websites for our customers and underwriters.{' '}
        I graduated from{' '}  
        <AnimatedUnderlineLink
          section="main"
          href="https://www.cornell.edu/"
          aria-label="Cornell University Website"
        >
          Cornell University
        </AnimatedUnderlineLink>{' '}
        with a Master of Engineering in 2018 and with a Bachelor of Science in 2017.{' '}
        I have also previous worked for{' '}
        <AnimatedUnderlineLink
          section="main"
          href="https://www.boeing.com/"
          aria-label="Boeing Website"
        >
          Boeing
        </AnimatedUnderlineLink>.{' '}
        I enjoy running, playing board games, and trying new things.
      </p>
      <Card title="Jobs">

      </Card>
    </AboutContainer>
  );
}

export default About;