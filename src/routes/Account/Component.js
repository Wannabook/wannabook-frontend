import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

import { getPageUrl } from '../RouteResolver';
import ChangePassword from '../../components/Account/ChangePassword';

const Component = ({ changePassword }) => {
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

Component.propTypes = {
  changePassword: PropTypes.func.isRequired,
};

export default Component;
