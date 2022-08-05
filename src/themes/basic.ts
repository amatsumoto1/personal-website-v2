import { DefaultTheme } from 'styled-components';
import { ThemeName } from '../constants/themes';

export const basicTheme: DefaultTheme = {
  name: ThemeName.BASIC,
  colors: {
    isDark: false,
    primary: '#24292f',
    primaryHighlighted: '#49535f',
    secondary: '#ebedf0',
    secondaryHighlighted: '#c1c1c1',
    link: '#2088a4',
    linkHighlighted: '#2cb2d5',
    header: '#ededed',
    headerHighlighed: '#cacaca',
    popup: '#ededed',
    popupHighlighted: '#cacaca',
    modal: '#e4e4e4',
    modalOverlay: '#222222dd',
    modalHighlighted: '#b6b6b6',
    shadow: '#1d1d1d'
  },
  fontSizes: {
    default: '16px'
  },
  borderRadius: {
    default: '5px',
    button: '5px',
    modal: '1em'
  }
};