import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import MainSlider from '../../components/MainSlider/index';
import Button from '../../ui-kit/components/Button/index';
import { Form, Label, StyledInput } from './styles';

import '../../styles/test-style.scss';

export default class Home extends React.Component {
  render() {
    return (
      <Grid stackable columns={1}>
        <Grid.Row stretched columns="1">
          <Grid.Column>
            <Segment>
              <MainSlider />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <Segment>
              <Form>
                <Label>
                  <StyledInput error />
                </Label>
                <Label>
                  <StyledInput
                    loading
                    icon="user"
                    iconPosition="left"
                    placeholder="Search..."
                  />
                </Label>
                <Button size="large" primary>
                  Click here
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column only="tablet computer">
            <Segment>
              This is something near form but it only appears on computer and
              tablet widths
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <Segment>Column 1 is displayed on all devices</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Column 2 is displayed on all devices</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="computer" columns={3}>
          <Grid.Column>
            <Segment>These 3 columns</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>will only appear</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>on computer widths</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
