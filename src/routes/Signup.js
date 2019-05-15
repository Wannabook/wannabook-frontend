import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { AuthContext } from '../core/auth/index';

import {
  Container,
  SocialNetworkList,
  SocialNetworkLink,
  Description,
  Form,
  Label,
  StyledInput,
  SignInButton,
} from './styles';

const socialNetworkList = [
  {
    name: 'Facebook',
    id: 'fb',
  },
  {
    name: 'Google',
    id: 'gl',
  },
  {
    name: 'VK',
    id: 'vk',
  },
  {
    name: 'Instagram',
    id: 'in',
  },
];

const inputList = [
  {
    placeholder: 'Адрес эл. почты*',
    type: 'email',
  },
  {
    placeholder: 'Имя*',
    type: 'text',
  },
  {
    placeholder: 'Пароль*',
    type: 'password',
  },
  {
    placeholder: 'Конт. тел*',
    type: 'tel',
  },
];

const descriptionText = 'Зарегистрироваться через';

const Signup = props => {
  return (
    <AuthContext.Consumer>
      {loggedIn => (
        <Grid stackable columns="1">
          <Grid.Row stretched columns="1">
            <Grid.Column>
              {// if user is logged in, redirect them away from sign-up page
              loggedIn && <Redirect to="/" />}
              <Container>
                <Description>{descriptionText}</Description>
                <SocialNetworkList>
                  {socialNetworkList.map(item => (
                    <SocialNetworkLink to="/" key={item.name}>
                      {item.id}
                    </SocialNetworkLink>
                  ))}
                </SocialNetworkList>
              </Container>
              <Container>
                <Form>
                  {inputList.map(item => (
                    <Label key={item.type}>
                      <StyledInput {...item} />
                    </Label>
                  ))}
                  <Link to="/">
                    <SignInButton size="large" secondary>
                      Зарегистрироваться
                    </SignInButton>
                  </Link>
                </Form>
                <Description>Есть учетная запись?</Description>
                <Description>
                  <Link to="/sign-in">Войти</Link>
                </Description>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </AuthContext.Consumer>
  );
};

export default Signup;
