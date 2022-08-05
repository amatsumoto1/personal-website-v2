import { themeTable } from '../../store/theme';
import { ThemeName } from '../../constants/themes';
import { GlobalState } from '../../types/store';
import { createSelector } from '@reduxjs/toolkit';

export const getCurrentThemeName = (state: GlobalState) => state.theme.current;

export const getCurrentTheme = createSelector(
  getCurrentThemeName,
  (themeName) => themeTable[themeName]
);

export const getAllThemeNames = () => Object.values(ThemeName) as ThemeName[];