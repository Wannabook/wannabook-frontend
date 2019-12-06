import React from 'react';
import { Modal } from 'semantic-ui-react';

import { ModalHeader } from './styles';

interface ModalPopUpProp {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const ModalPopUp: React.FC<ModalPopUpProp> = ({
  open,
  handleClose,
  title,
  children,
}) => (
  <Modal open={open} onClose={handleClose}>
    {title && <ModalHeader>{title}</ModalHeader>}
    <Modal.Content>
      <Modal.Description>{children}</Modal.Description>
    </Modal.Content>
  </Modal>
);
