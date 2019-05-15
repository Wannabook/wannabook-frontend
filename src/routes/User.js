import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

export default class User extends React.Component {
  render() {
    return (
      <Grid stackable columns="1">
        <Grid.Row stretched columns="1">
          <Grid.Column>
            <Segment>
              <div>User page</div>
              <Link to="/sign-out">Log out</Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
