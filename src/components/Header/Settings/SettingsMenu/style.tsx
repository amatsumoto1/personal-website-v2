import styled from 'styled-components';
import Popup from '../../../Common/Popup';
import { ScreenSizesPx } from '../../../../constants/screen';
import { HEADER_HEIGHT, HEADER_SETTINGS_EXPAND_COLLAPSE_TIME } from '../../../../constants/layout';
import { Button } from '../../../Styles/Button';

type SettingsMenuContainerProps = {
  expanded: boolean
}

export const SettingsMenuContainer = styled(Popup)<SettingsMenuContainerProps>`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  clip-path: inset(0 0 -100% 0);
  box-sizing: border-box;
  overflow-y: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: max-height ${HEADER_SETTINGS_EXPAND_COLLAPSE_TIME} ease-in-out;
  max-height: ${({ expanded }) => expanded ? '100vh' : '0' };
  padding: 1em 2em;

  @media screen and (min-width: ${ScreenSizesPx.MD}) {
    position: absolute;
    top: calc(${HEADER_HEIGHT} - 0.1em);
    border-radius: 5px;
    width: auto;
    transform: none;
    clip-path: none;
    padding: 0.2em 0;
  }
`;

export const SettingsMenuItemContainer = styled.li`
  width: 100%;
  line-height: 2em;
  height: 2em;
`;

export const SettingsMenuButton = styled(Button).attrs({
  section: 'header',
  variant: 'borderless'
})`
  height: 100%;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0;

  @media screen and (min-width: ${ScreenSizesPx.MD}) {
    padding: 0 0.5em;
    border-bottom: none;
  }
`;