import React from 'react';
import {
  NavButtonLineTopLeft,
  NavButtonLineTopRight,
  NavButtonLineMiddleLeft,
  NavButtonLineMiddleRight,
  NavButtonLineBottomLeft,
  NavButtonLineBottomRight
} from './style';
import { HeaderButton } from '../../style';

type Props = {
  expanded: boolean,
  onClick: () => void,
}

const NavButton: React.FC<Props> = ({
  expanded,
  onClick
}) => {
  const ariaLabel = expanded ? 'Hide Nav Menu' : 'Show Nav Menu';

  return (
    <HeaderButton
      type="button"
      aria-label={ariaLabel}
      aria-expanded={expanded}
      aria-haspopup={true}
      onClick={onClick}
    >
      <NavButtonLineTopLeft expanded={expanded} />
      <NavButtonLineTopRight expanded={expanded} />
      <NavButtonLineMiddleLeft expanded={expanded} />
      <NavButtonLineMiddleRight expanded={expanded} />
      <NavButtonLineBottomLeft expanded={expanded} />
      <NavButtonLineBottomRight expanded={expanded} />
    </HeaderButton>
  );
}

export default NavButton;