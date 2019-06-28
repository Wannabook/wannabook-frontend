import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Modal, Button } from 'semantic-ui-react';
import { getPageUrl } from '../RouteResolver';
import { ShowChangePasswordModalButton } from './styles';

const ChangePasswordModal = () => (
  <Modal trigger={<Button>Изменить пароль</Button>}>
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

  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Segment>
            <div>User page</div>
            <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
            {/*<Link to={getPageUrl('CHANGE-PASSWORD')}>Сменить пароль</Link>*/}
            <ChangePasswordModal />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default User;
