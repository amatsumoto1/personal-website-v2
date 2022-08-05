import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalName } from '../../constants/modals';

type ModalState = {
  active?: ModalName
};

const initialState: ModalState = {};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    setActive: (state: ModalState, action: PayloadAction<ModalName>) => {
      state.active = action.payload;
    },
    hide: (state: ModalState) => {
      state.active = undefined;
    }
  }
});

export const {
  setActive: setActiveModal,
  hide: hideModals
} = modalsSlice.actions;

export default modalsSlice.reducer;