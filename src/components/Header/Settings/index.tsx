import React, { memo, useState, useEffect } from 'react';
import { SettingsContainer } from './style';
import { HeaderButton } from '../style';
import { HEADER_SETTINGS_EXPAND_COLLAPSE_TIME_MS } from '../../../constants/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SettingsMenu from './SettingsMenu';
import useDetectMobile from '../../../hooks/useDetectMobile';

type Props = {
  expanded: boolean,
  toggleExpanded: () => void,
}

const Settings: React.FC<Props> = ({
  expanded,
  toggleExpanded
}) => {
  const [menuVisible, setMenuVisible] = useState(expanded);
  const [menuExpanded, setMenuExpanded] = useState(expanded);
  const isMobile = useDetectMobile();

  const buttonAriaLabel = expanded ? 'Hide Settings Menu' : 'Show Settings Menu';

  const expandMenu = () => {
    setMenuVisible(true);

    if (isMobile) {
      setTimeout(() => {
        setMenuExpanded(true);
      });
    }
    else {
      setMenuExpanded(true);
    }
    
  }

  const collapseMenu = () => {
    setMenuExpanded(false);

    if (isMobile) {
      setTimeout(() => {
        setMenuVisible(false);
      }, HEADER_SETTINGS_EXPAND_COLLAPSE_TIME_MS);
    }
    else {
      setMenuVisible(false);
    }
  }

  useEffect(() => {
    if (expanded) {
      expandMenu();
    }
    else {
      collapseMenu();
    }
  }, [
    expanded,
    expandMenu,
    collapseMenu
  ]);

  const onSettingsButtonClicked = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleExpanded();
  }

  return (
    <SettingsContainer>
      <HeaderButton
        type="button"
        onClick={onSettingsButtonClicked}
        aria-label={buttonAriaLabel}
        aria-haspopup={true}
        aria-expanded={expanded}
      >
        <FontAwesomeIcon
          icon={faGear}
          size="lg" />
      </HeaderButton>
      {
        menuVisible &&
        <SettingsMenu
          expanded={menuExpanded}
          hide={toggleExpanded}
        />
      }
    </SettingsContainer>
  );
}

export default memo(Settings);