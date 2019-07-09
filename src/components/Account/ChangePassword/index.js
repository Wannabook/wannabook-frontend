import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ShowChangePasswordModalButton } from '../../../routes/Account/styles';
import ModalPopUp from '../../common/ModalPopUp';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';

const ChangePassword = ({ changePassword }) => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const handleShowModal = () => setShowChangePasswordModal(true);

  const handleCloseModal = () => setShowChangePasswordModal(false);

  return (
    <>
      <ShowChangePasswordModalButton
        size="large"
        primary
        onClick={handleShowModal}
      >
        Сменить пароль
      </ShowChangePasswordModalButton>
      <ModalPopUp
        open={showChangePasswordModal}
        handleClose={handleCloseModal}
        title="Смена пароля"
      >
        <ChangePasswordForm changePasswordRequest={changePassword} />
      </ModalPopUp>
    </>
  );
};

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
};

export default ChangePassword;
