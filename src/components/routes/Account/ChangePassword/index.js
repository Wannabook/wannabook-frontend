import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ShowChangePasswordModalButton } from '../../../../routes/Account/styles';
import ModalPopUp from '../../../common/ModalPopUp';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';

const ChangePassword = ({
  changePassword,
  resetChangePasswordRequestState,
  loading,
  loaded,
}) => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const handleShowModal = () => {
    resetChangePasswordRequestState();
    setShowChangePasswordModal(true);
  };

  const handleCloseModal = () => setShowChangePasswordModal(false);
  const inModalOpen = showChangePasswordModal && !loaded;

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
        open={inModalOpen}
        handleClose={handleCloseModal}
        title="Смена пароля"
      >
        <ChangePasswordForm changePassword={changePassword} loading={loading} />
      </ModalPopUp>
    </>
  );
};

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
  resetChangePasswordRequestState: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ChangePassword;
