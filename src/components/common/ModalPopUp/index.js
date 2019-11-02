import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'semantic-ui-react';

import { ModalHeader } from './styles';

export const ModalPopUp = ({ open, handleClose, title, children }) => (
  <Modal open={open} onClose={handleClose}>
    {title && <ModalHeader>{title}</ModalHeader>}
    <Modal.Content>
      <Modal.Description>{children}</Modal.Description>
    </Modal.Content>
  </Modal>
);

ModalPopUp.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
