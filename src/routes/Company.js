import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import OrganizationsList from '../components/OrganizationsList';

export default class Company extends React.Component {
  render() {
    return (
      <Grid stackable columns="1">
        <Grid.Row stretched columns="1">
          <Grid.Column>
            <Segment>
              <OrganizationsList />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
