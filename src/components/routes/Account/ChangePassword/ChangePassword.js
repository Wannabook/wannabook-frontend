import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShowChangePasswordModalButton } from '../../../../routes/Account/styles';
import ModalPopUp from '../../../common/ModalPopUp';
import { ChangePasswordForm } from './ChangePasswordForm/ChangePasswordForm';
import {
  changePassword,
  getChangePasswordLoadingProps,
  resetChangePasswordRequestState,
} from '../../../../store/modules/auth/changePassword';

export const ChangePassword = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const handleShowModal = () => {
    handleResetChangePasswordRequestState();
    setShowChangePasswordModal(true);
  };

  const { loading, loaded } = useSelector(getChangePasswordLoadingProps);
  const dispatch = useDispatch();
  const handleChangePassword = () => dispatch(changePassword());
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
      </ModalPopUp>
    </>
  );
};
