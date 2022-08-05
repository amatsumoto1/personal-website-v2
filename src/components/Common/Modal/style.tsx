import styled from 'styled-components';
import { FlexRow, FlexCol } from '../../Styles/Flex';
import { Button } from '../../Styles/Button';
import { MODAL_TOP_POSITION, ZIndexes } from '../../../constants/layout';
import { createColorStyle } from '../../Styles/utils';

const MODAL_EXIT_BUTTON_HEIGHT = '2rem';

export const ModalOverlay = styled(FlexCol).attrs({
  alignItems: 'center'
})`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: var(--color-modal-overlay);
  z-index: ${ZIndexes.MODAL};
`;

export const ModalContainer = styled.div`
  margin-top: ${MODAL_TOP_POSITION};
  padding: 1em;
  ${createColorStyle({ section: 'modal' })}
  border-radius: var(--border-radius-modal);
`;

export const ModalTitle = styled(FlexRow).attrs({
  justifyContent: 'center'
})`
  font-weight: bold;
  font-size: 1.25rem;
  padding-left: ${MODAL_EXIT_BUTTON_HEIGHT};
  text-align: center;
  flex-grow: 1;
  margin: 0.2em 0.5em 0.2em 0;
`;

export const ModalCloseButton = styled(Button).attrs({
  variant: 'circular',
  section: 'modal'
})`
  height: ${MODAL_EXIT_BUTTON_HEIGHT};
  width: ${MODAL_EXIT_BUTTON_HEIGHT};
  line-height: ${MODAL_EXIT_BUTTON_HEIGHT};
  font-size: 1.2em;
`;