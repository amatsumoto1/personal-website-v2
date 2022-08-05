import styled from 'styled-components';
import { createColorStyle, PageSection } from '../../Styles/utils';
import { shadowStyle } from '../../Styles/Common';

type PopupContainerProps = {
  section: PageSection
}

export const PopupContainer = styled.div<PopupContainerProps>`
  ${({ section }) => createColorStyle({
    mainStyle: 'primary',
    section: section
  })}
  position: absolute;
  border-radius: 5px;
  ${shadowStyle}
`;