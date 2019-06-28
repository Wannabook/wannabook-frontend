import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Modal, Button } from 'semantic-ui-react';
import { getPageUrl } from '../RouteResolver';
import { ShowChangePasswordModalButton } from './styles';
import {
  ChangePasswordButton,
  ChangePasswordForm,
} from '../ChangePassword/styles';

const ChangePasswordModal = ({ open }) => (
  <Modal open={open}>
    <Modal.Header>Смена пароля</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Форма для смены пароля</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

const User = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const handleShowModal = () =>
    setShowChangePasswordModal(!showChangePasswordModal);

  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Segment>
            <div>User page</div>
            <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
            {/*<Link to={getPageUrl('CHANGE-PASSWORD')}>Сменить пароль</Link>*/}
            <ChangePasswordModal open={showChangePasswordModal} />
            <ChangePasswordButton
              size="large"
              primary
              onClick={handleShowModal}
            >
              Изменить пароль
            </ChangePasswordButton>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default User;
