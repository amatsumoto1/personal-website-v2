import React from 'react';
import {
  SettingsMenuContainer,
  SettingsMenuItemContainer,
  SettingsMenuItemList,
  SettingsMenuButton
} from './style';


type Props = {
  expanded: boolean,
  hide: () => void,
}

export const SettingsMenu: React.FC<Props> = ({
  expanded,
  hide
}) => {
  const onSelected = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    hide();
  }

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
            aria-label="Show About This Website"
            onClick={onSelected}
          >
            About This Website
          </SettingsMenuButton>
        </SettingsMenuItemContainer>
        <SettingsMenuItemContainer role="menuitem">
          <SettingsMenuButton
            type="button"
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