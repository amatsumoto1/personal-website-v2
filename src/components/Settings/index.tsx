import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import {
  SettingsFormContainer,
  SettingsFormControlsContainer,
  SettingsFormButtonRow,
  SettingsFormButton,
  settingsSelectLabelStyle,
  settingsSelectStyle
} from './style';
import Modal from '../Common/Modal';
import Select from '../Common/Select';
import { hideModals } from '../../store/modals';
import { getAllThemeNames,  getCurrentThemeName } from '../../selectors/theme';
import { SelectOption } from '../../types/common';
import { ThemeName } from '../../constants/themes';
import { setCurrentTheme } from '../../store/theme';

const themeOptions: SelectOption[] = getAllThemeNames().map(themeName => ({
    text: themeName,
    value: themeName
  })
);

const SettingsModal: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getCurrentThemeName);
  const [newTheme, setNewTheme] = useState(currentTheme);

  const close = useCallback(() => {
    dispatch(hideModals());
  }, [dispatch]);

  const onThemeChange = useCallback((value: string) => {
    setNewTheme(value as ThemeName);
  }, [setNewTheme]);

  const submitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    batch(() => {
      dispatch(setCurrentTheme(newTheme));
      close();
    });
  }

  return (
    <Modal
      name="settings"
      title="Settings"
      close={close}
    >
      <SettingsFormContainer
        onSubmit={submitForm}
      >
        <SettingsFormControlsContainer>
          <Select
            id="change-theme"
            options={themeOptions}
            onChange={onThemeChange}
            label="Theme"
            section="modal"
            extraSelectStyles={settingsSelectStyle}
            extraLabelStyles={settingsSelectLabelStyle}
            defaultValue={currentTheme}
            value={newTheme}
          />
        </SettingsFormControlsContainer>
        <SettingsFormButtonRow>
          <SettingsFormButton
            type="button"
            aria-label="Cancel"
            onClick={close}
          >
            Cancel
          </SettingsFormButton>
          <SettingsFormButton
            type="submit"
            aria-label="Save Settings"
          >
            Save
          </SettingsFormButton>
        </SettingsFormButtonRow>
      </SettingsFormContainer>
    </Modal>
  );
}

export default SettingsModal;