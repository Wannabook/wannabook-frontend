import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

export default class Service extends React.Component {
  render() {
    return (
      <Grid stackable columns="1">
        <Grid.Row stretched columns="1">
          <Grid.Column>
            <Segment>Service page</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
