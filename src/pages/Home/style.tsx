import styled from 'styled-components';
import { Container } from '../../components/Styles/Common';
import { HEADER_HEIGHT } from '../../constants/layout';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin-top: 6em;
  padding: 0 0.2em ${HEADER_HEIGHT};
`;

export const MainTitle = styled.h1`
  font-size: 2.5em;
  margin: 0 0 0.8em;
`;

export const MainSubtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
`;