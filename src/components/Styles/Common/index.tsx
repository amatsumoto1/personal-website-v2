import styled, { css } from 'styled-components';
import { ScreenSizesPx } from '../../../constants/screen';
import { createColorStyle, PageSection } from '../utils';

export const shadowStyle = css`
  box-shadow: 0 0 10px var(--color-shadow);
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 100%;

  @media screen and (min-width: ${ScreenSizesPx.MD}) {
    max-width: 470px;
  }

  @media screen and (min-width: ${ScreenSizesPx.LG}) {
    max-width: 740px;
  }

  @media screen and (min-width: ${ScreenSizesPx.XL}) {
    max-width: 1010px;
  }
`;  

export const AnimatedUnderlineLink = styled.a<{
  section?: PageSection
}>`
  display: inline-block;
  text-decoration: none;
  ${({ section }) => createColorStyle({ mainStyle: 'link', section, focusMain: true })}

  &::after {
    position: relative;
    display: block;
    content: '';
    width: 0;
    height: 1px;
    transition: width 0.2s linear;
    background: var(--color-link-highlighted);
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    &::after {
      width: 100%;
    }
  }
`;