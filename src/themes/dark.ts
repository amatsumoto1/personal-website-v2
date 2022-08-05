import { DefaultTheme } from 'styled-components';
import { ThemeName } from '../constants/themes';

export const darkTheme: DefaultTheme = {
  name: ThemeName.DARK,
  colors: {
    isDark: true,
    primary: '#ededed',
    primaryHighlighted: '#bababa',
    secondary: '#0e0e0e',
    secondaryHighlighted: '#414141',
    link: '#bafff4',
    linkHighlighted: '#87ccc1',
    header: '#333333',
    headerHighlighed: '#5c5c5c',
    popup: '#333333',
    popupHighlighted: '#5c5c5c',
    modal: '#0e0e0e',
    modalOverlay: '#888888cc',
    modalHighlighted: '#414141',
    shadow: '#333333'
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