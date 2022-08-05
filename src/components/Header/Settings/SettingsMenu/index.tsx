import React from 'react';
import {
  SettingsMenuContainer,
  SettingsMenuItemContainer,
  SettingsMenuButton
} from './style';
import { NoBulletList } from '../../../Styles/Menu';


type Props = {
  expanded: boolean,
  hide: () => void,
}

export const SettingsMenu: React.FC<Props> = ({
  expanded,
  hide
}) => {
  return (
    <SettingsMenuContainer
      expanded={expanded}
      hide={hide}
      hideOnClickOutside
    >
      <NoBulletList role="menu">
        <SettingsMenuItemContainer>
          <SettingsMenuButton
            type="button"
            aria-label="Show About This Website"
          >
            About This Website
          </SettingsMenuButton>
        </SettingsMenuItemContainer>
      </NoBulletList>
    </SettingsMenuContainer>
  )
}

export default SettingsMenu;