import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ModalPopUp } from 'components';

import {
  getChangePasswordLoadingProps,
  resetChangePasswordRequestState,
} from 'store';

import { ChangePasswordForm } from './ChangePasswordForm';
import { ChangePasswordSuccess } from './ChangePasswordSuccess';
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
