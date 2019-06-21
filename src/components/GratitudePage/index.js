import React from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';

const GratitudePage = props => {
  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Container text textAlign="center">
            <Header as="h3">Спасибо!</Header>
            <p>Вам на почту было отправлено письмо для восстановления пароля</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default GratitudePage;
