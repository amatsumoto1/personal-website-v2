import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getActiveModal } from '../../../selectors/modals';
import { ModalName } from '../../../constants/modals';

const AboutModal = lazy(() => import('../../About'));
const SettingsModal = lazy(() => import('../../Settings'));

const ModalDictionary: Record<ModalName, React.ComponentType> = {
  [ModalName.ABOUT]: AboutModal,
  [ModalName.SETTINGS]: SettingsModal
};

const Modals: React.FC = () => {
  let activeModalComponent = null;
  const activeModalName = useSelector(getActiveModal);

  if (activeModalName) {
    const ActiveModalComponent = ModalDictionary[activeModalName];
    activeModalComponent = <ActiveModalComponent />;
  }


  return (
    <Suspense>
      {activeModalComponent}
    </Suspense>
  );
}

export default Modals;