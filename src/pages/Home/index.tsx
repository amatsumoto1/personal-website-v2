import React from 'react';
import {
  HomeContainer,
  MainTitle,
  MainSubtitle
} from './style';

const Home: React.FC = () => {
  return (
    <HomeContainer as="section">
      <MainTitle>Andrew Matsumoto</MainTitle>
      <MainSubtitle>Passionate About Problem Solving and Trying New Things.</MainSubtitle>
    </HomeContainer>
  );
}

export default Home;