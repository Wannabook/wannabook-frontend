import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { getPageUrl } from '../RouteResolver';

import { Container, Description, Illustration, SignInButton } from './styles';

const buttons = [
  {
    url: getPageUrl('SIGN-IN'),
    type: { secondary: true, size: 'large' },
    btnText: 'Войти',
  },
  {
    url: getPageUrl('SIGN-UP'),
    type: { secondary: true, size: 'large' },
    btnText: 'Зарегистрироваться',
  },
];

const descriptionText =
  'Наличие профиля поможет Вам без труда бронировать услуги на нашем сайте';

const Registration = () => {
  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Container>
            <Description>
              <Illustration src="" alt="Illustration" />
              <p>{descriptionText}</p>
            </Description>
            {buttons.map(item => (
              <Link to={item.url} key={item.url}>
                <SignInButton {...item.type}>{item.btnText}</SignInButton>
              </Link>
            ))}
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Registration;
