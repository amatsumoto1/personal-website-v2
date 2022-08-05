import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme';
import modalReducer from './modals';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modals: modalReducer
  }
});