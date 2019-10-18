import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalPopUp from '../../../common/ModalPopUp';
import { ChangePasswordForm } from './ChangePasswordForm/ChangePasswordForm';
import { ChangePasswordSuccess } from './ChangePasswordSuccess/ChangePasswordSuccess';
import {
  getChangePasswordLoadingProps,
  resetChangePasswordRequestState,
} from '../../../../store/modules/auth/changePassword';
import { ShowChangePasswordModalButton, Title, CancelButton } from './styles';

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

  const modalContent = loaded ? (
    <ChangePasswordSuccess />
  ) : (
    <>
      <Title>Смена пароля</Title>
      <ChangePasswordForm />
      <CancelButton secondary onClick={handleHideModal}>
        Отменить
      </CancelButton>
    </>
  );

  return (
    <>
      <ShowChangePasswordModalButton
        size="large"
        secondary
        onClick={handleShowModal}
      >
        Изменить пароль
      </ShowChangePasswordModalButton>
      <ModalPopUp open={showChangePasswordModal} handleClose={handleCloseModal}>
        {modalContent}
      </ModalPopUp>
    </>
  );
};
