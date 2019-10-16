import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalPopUp from '../../../common/ModalPopUp';
import { ChangePasswordForm } from './ChangePasswordForm/ChangePasswordForm';
import {
  getChangePasswordLoadingProps,
  resetChangePasswordRequestState,
} from '../../../../store/modules/auth/changePassword';
import { ShowChangePasswordModalButton, CancelButton } from './styles';

export const ChangePassword = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleShowModal = () => {
    handleResetChangePasswordRequestState();
    setShowChangePasswordModal(true);
  };

  const handleHideModal = () => {
    handleResetChangePasswordRequestState();
    setShowChangePasswordModal(false);
  };

  const { loaded } = useSelector(getChangePasswordLoadingProps);
  const dispatch = useDispatch();
  const handleResetChangePasswordRequestState = () =>
    dispatch(resetChangePasswordRequestState());

  const handleCloseModal = () => setShowChangePasswordModal(false);
  const inModalOpen = showChangePasswordModal && !loaded;

  return (
    <>
      <ShowChangePasswordModalButton
        size="large"
        secondary
        onClick={handleShowModal}
      >
        Изменить пароль
      </ShowChangePasswordModalButton>
      <ModalPopUp
        open={inModalOpen}
        handleClose={handleCloseModal}
        title="Смена пароля"
      >
        <ChangePasswordForm />
        <CancelButton secondary onClick={handleHideModal}>
          Отменить
        </CancelButton>
      </ModalPopUp>
    </>
  );
};
