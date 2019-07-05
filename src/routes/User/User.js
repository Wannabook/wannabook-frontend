import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Modal } from 'semantic-ui-react';
import { getPageUrl } from '../RouteResolver';
import { ShowChangePasswordModalButton } from './styles';
import ChangePassword from '../ChangePassword/ChangePassword';

const ChangePasswordModal = ({ open, handleClose }) => (
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

const User = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const handleShowModal = () => setShowChangePasswordModal(true);

  const handleCloseModal = () => setShowChangePasswordModal(false);

  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Segment>
            <div>User page</div>
            <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
            <ChangePasswordModal
              open={showChangePasswordModal}
              handleClose={handleCloseModal}
            />
            <ShowChangePasswordModalButton
              size="large"
              primary
              onClick={handleShowModal}
            >
              Сменить пароль
            </ShowChangePasswordModalButton>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default User;
