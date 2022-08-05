import React from 'react';
import { useDispatch } from 'react-redux';
import {
  SettingsMenuContainer,
  SettingsMenuItemContainer,
  SettingsMenuItemList,
  SettingsMenuButton
} from './style';
import { setActiveModal } from '../../../../store/modals';
import { ModalName } from '../../../../constants/modals';


type Props = {
  expanded: boolean,
  hide: () => void,
}

export const SettingsMenu: React.FC<Props> = ({
  expanded,
  hide
}) => {
  const dispatch = useDispatch();

  const onSelected = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    switch(e.currentTarget.name) {
      case 'about-modal-button':
        dispatch(setActiveModal(ModalName.ABOUT));
        break;
      case 'settings-modal-button':
        dispatch(setActiveModal(ModalName.SETTINGS));
        break;
      default:
        break;
    }
  
    hide();
  };

  return (
    <SettingsMenuContainer
      expanded={expanded}
      hide={hide}
      hideOnClickOutside
    >
      <SettingsMenuItemList role="menu">
        <SettingsMenuItemContainer role="menuitem">
          <SettingsMenuButton
            type="button"
            name="about-modal-button"
            aria-label="Show About This Website"
            onClick={onSelected}
          >
            About This Website
          </SettingsMenuButton>
        </SettingsMenuItemContainer>
        <SettingsMenuItemContainer role="menuitem">
          <SettingsMenuButton
            type="button"
            name="settings-modal-button"
            aria-label="Show Settings"
            onClick={onSelected}
          >
            Settings
          </SettingsMenuButton>
        </SettingsMenuItemContainer>
      </SettingsMenuItemList>
    </SettingsMenuContainer>
  )
}

export default SettingsMenu;