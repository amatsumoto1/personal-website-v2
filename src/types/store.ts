import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from '../store';

export type AppDispatch = typeof store.dispatch;
export type GlobalState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  GlobalState,
  unknown,
  Action<string>
>;