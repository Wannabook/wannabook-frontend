import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'semantic-ui-react';
import ChangePassword from '../ChangePassword/ChangePassword';

const ModalPopUp = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <Modal.Header>Смена пароля</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <ChangePassword
          changePasswordRequest={() => console.log('Change password')}
        />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

ModalPopUp.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalPopUp;
