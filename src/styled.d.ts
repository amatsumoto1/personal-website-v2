import 'styled-components';
import { ThemeName } from './constants/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName,
    colors: {
      isDark: boolean,
      primary: string,
      primaryHighlighted: string,
      secondary: string,
      secondaryHighlighted: string,
      link: string,
      linkHighlighted: string,
      header: string,
      headerHighlighed: string,
      modal: string,
      modalHighlighted: string,
      modalOverlay: string,
      popup: string,
      popupHighlighted: string,
      shadow: string,
    },
    fontSizes: {
      default: string,
    },
    borderRadius: {
      default: string,
      button: string,
      modal: string
    }
  }
}