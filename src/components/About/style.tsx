import styled from 'styled-components';
import Modal from '../Common/Modal';
import { createColorStyle } from '../Styles/utils';
import { ScreenSizesPx } from '../../constants/screen';

export const AboutModalContainer = styled(Modal)`
   width: calc(100% - 2.5em);
   padding: 0.5em;

  @media screen and (min-width: ${ScreenSizesPx.MD}) {
    width: 20em;
  }

  @media screen and (min-width: ${ScreenSizesPx.LG}) {
    width: 40em;
  }
`;