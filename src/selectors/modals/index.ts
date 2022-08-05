import { GlobalState } from '../../types/store';

export const getActiveModal = (state: GlobalState) => state.modals.active;