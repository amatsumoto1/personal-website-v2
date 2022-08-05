import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';
import {
  basicTheme,
  darkTheme
} from '../../themes';
import {
  ThemeName,
  DEFAULT_LIGHT_THEME,
  DEFAULT_DARK_THEME
 } from '../../constants/themes';
 import { AppThunk } from '../../types/store';

type ThemeState = {
  current: ThemeName
};

export const themeTable: Record<ThemeName, DefaultTheme> = {
  [ThemeName.BASIC]: basicTheme,
  [ThemeName.DARK]: darkTheme,
  [ThemeName.MUTED]: basicTheme,
  [ThemeName.COLORFUL]: basicTheme,
};

const initialState: ThemeState = {
  current: DEFAULT_LIGHT_THEME
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setCurrent: (state: ThemeState, action: PayloadAction<ThemeName>) => {
      state.current = action.payload;
    },
    reset: (state: ThemeState) => {
      state = initialState;
    }
  }
});

export const setDefaultDarkTheme = (): AppThunk => {
  return (dispatch) => {
    dispatch(setCurrentTheme(DEFAULT_DARK_THEME));
  }
}

export const {
  setCurrent: setCurrentTheme,
  reset: resetTheme,
} = themeSlice.actions;

export default themeSlice.reducer;