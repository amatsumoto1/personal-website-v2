import styled, { css } from 'styled-components';
import { Button } from '../Styles/Button';
import { FlexRow } from '../Styles/Flex';

export const SettingsFormContainer = styled.form`
  padding-top: 1em;  
`;

export const SettingsFormControlsContainer = styled.div`
  padding: 0.2em 0.5em;
`;

export const settingsSelectLabelStyle = css`
  padding-right: 4em;
`;

export const settingsSelectStyle = css`
  width: 8em;

  &:hover,
  &:active {
    color: var(--color-primary-highlighted);
    border-color: var(--color-primary-highlighted);
  }
`;

export const SettingsFormButtonRow = styled(FlexRow)`
  margin-top: 0.5em;
  padding-top: 0.5em;
  border-top: 1px solid var(--color-primary-highlighted);
`;

export const SettingsFormButton = styled(Button).attrs({
  section: 'modal',
  variant: 'borderless'
})`
  height: 2em;
  font-weight: 600;
  font-size: 1.1em;
  flex: 1;
`;