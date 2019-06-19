import React, { useState } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Header, ContinueButton, ContinueInput } from './styles';

const Index = props => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    props.cbFunction(email);
  };

  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Container text textAlign="center">
            <Header as="h1">
              Для восстановления пароля введите адрес вашей электронной почты
            </Header>
            <ContinueInput
              placeholder={'Адрес эл. почты*'}
              type={'email'}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <ContinueButton size="large" secondary onClick={handleContinue}>
              Продолжить
            </ContinueButton>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Index;
