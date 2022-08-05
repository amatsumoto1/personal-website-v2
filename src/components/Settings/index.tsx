import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Common/Modal';
import { hideModals } from '../../store/modals';

const SettingsModal: React.FC = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideModals());
  };

  return (
    <Modal
      name="settings"
      title="Settings"
      close={close}
    >
    </Modal>
  );
}

export default SettingsModal;