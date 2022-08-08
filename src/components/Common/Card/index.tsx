import React, { useState, memo } from 'react';
import {
  CardContainer,
  CardTitle,
  CardToggleButton,
  CardToggleIcon,
  CardContents
} from './style';
import { FlexRow } from '../../Styles/Flex';
import { PageSection } from '../../Styles/utils';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: React.ReactNode,
  defaultExpanded?: boolean,
  children?: React.ReactNode,
  className?: string,
  section?: PageSection
}

const Card: React.FC<Props> = ({
  title,
  defaultExpanded = true,
  children,
  className,
  section = 'main'
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer className={className}>
      <FlexRow>
        <CardTitle>
          {title}
        </CardTitle>
        <CardToggleButton
          type="button"
          onClick={toggleExpanded}
        >
          <CardToggleIcon
            expanded={expanded}
            icon={faChevronDown}
          />
        </CardToggleButton>
      </FlexRow>
      <CardContents expanded={expanded}>
        {children}
      </CardContents>
    </CardContainer>
  )
};

export default Card;