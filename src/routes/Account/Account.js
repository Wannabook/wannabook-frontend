import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

import { getPageUrl } from '../RouteResolver';
import ChangePassword from '../../components/Account/ChangePassword';

const changePassword = () => console.log('Change Password');

const Account = () => {
  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Segment>
            <div>User page</div>
            <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
            <ChangePassword changePassword={changePassword} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Account;
