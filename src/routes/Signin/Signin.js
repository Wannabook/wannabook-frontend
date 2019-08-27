import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import { JWT_TOKEN } from '../../constants';
import { AuthContext } from '../../core/auth/index';

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
import { getPageUrl } from '../RouteResolver';
import { startGoogleAuth } from '../../store/modules/auth/actions';

const socialNetworkList = [
  {
    name: 'Facebook',
    id: 'fb',
    url: getPageUrl('HOME'),
  },
  {
    name: 'Google',
    id: 'gl',
    url: getPageUrl('HOME'),
  },
  {
    name: 'VK',
    id: 'vk',
    url: getPageUrl('HOME'),
  },
  {
    name: 'Instagram',
    id: 'in',
    url: getPageUrl('HOME'),
  },
];

const inputList = [
  {
    placeholder: 'Адрес эл. почты*',
    type: 'email',
  },
  {
    placeholder: 'Пароль*',
    type: 'password',
  },
];

const SignIn = props => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    localStorage.setItem(JWT_TOKEN, 'erglehrgerg');
    location.href = '/'; // for now :)
  };

  const handleStartGoogleAuth = () => {
    dispatch(startGoogleAuth());
  };

  return (
    <AuthContext.Consumer>
      {loggedIn => (
        <Grid stackable columns="1">
          <Grid.Row stretched columns="1">
            <Grid.Column>
              {// if user is logged in, redirect them away from login page
              loggedIn && <Redirect to={getPageUrl('HOME')} />}
              <Container>
                <Description>Войти с помощью</Description>
                <SocialNetworkList>
                  <Button onClick={handleStartGoogleAuth}>Google auth</Button>
                </SocialNetworkList>
              </Container>
              <Container>
                <Form>
                  {inputList.map(item => (
                    <Label key={item.type}>
                      <StyledInput {...item} />
                    </Label>
                  ))}
                  <Link to={getPageUrl('HOME')}>
                    <SignInButton size="large" secondary onClick={handleLogin}>
                      Войти
                    </SignInButton>
                  </Link>
                </Form>
                <Description>
                  <Link to={getPageUrl('FORGOT-PASSWORD')}>Забыли пароль?</Link>
                </Description>
              </Container>
              <Container>
                <Description>Нет учетной записи?</Description>
                <Description>
                  <Link to={getPageUrl('SIGN-UP')}>Зарегистрироваться</Link>
                </Description>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </AuthContext.Consumer>
  );
};

export default SignIn;
