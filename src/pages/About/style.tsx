import styled from 'styled-components';
import { Container } from '../../components/Styles/Common';
import Card from '../../components/Common/Card';

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 6em;

  p > {
    margin: 0.5em;
  }
`;

export const AboutCard = styled(Card)`
`;