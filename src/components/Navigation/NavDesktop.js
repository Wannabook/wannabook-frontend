import React from 'react';
import { Grid } from 'semantic-ui-react';

const NavigationDesktop = () => {
  return (
    <Grid className="navigation">
      {/* TODO: Complete desktop navigation based on how mobile nav works */}
      <Grid.Row stretched only="computer" columns="1">
        <Grid.Column>Nav menu for desktop</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NavigationDesktop;
