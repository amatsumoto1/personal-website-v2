import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../Styles/Button';

export const CardContainer = styled.section`
  width: 100%;
  border: 1px solid 
`;

export const CardTitle = styled.h2`
  flex: 1;
`;

type ExpandCollapseProps = {
  expanded: boolean
}

export const CardToggleButton = styled(Button).attrs({
  variant: 'borderless'
})`
  height: 100%;
`;

export const CardToggleIcon = styled(FontAwesomeIcon)<ExpandCollapseProps>`
  
`;

export const CardContents = styled.div<ExpandCollapseProps>`
  ${({ expanded }) =>  expanded && 'max-height: 0;'}
`;