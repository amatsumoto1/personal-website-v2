import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants/layout';

export const MainContentContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT};
`;