import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

import { getPageUrl } from '../RouteResolver';
import ChangePassword from '../../components/Account/ChangePassword';

const Account = ({
  changePassword,
  resetChangePasswordRequestState,
  loading,
  loaded,
}) => {
  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Segment>
            <div>User page</div>
            <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
            <ChangePassword
              changePassword={changePassword}
              resetChangePasswordRequestState={resetChangePasswordRequestState}
              loading={loading}
              loaded={loaded}
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Account.propTypes = {
  changePassword: PropTypes.func.isRequired,
  resetChangePasswordRequestState: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default Account;
