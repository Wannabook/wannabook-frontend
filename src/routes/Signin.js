import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { JWT_TOKEN } from '../constants';
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
    placeholder: 'Пароль*',
    type: 'password',
  },
];

class SignIn extends React.Component {
  handleLogin = () => {
    localStorage.setItem(JWT_TOKEN, 'erglehrgerg');
    location.href = '/'; // for now :)
  };

  render() {
    return (
      <AuthContext.Consumer>
        {loggedIn => (
          <>
            {// if user is logged in, redirect them away from login page
            loggedIn && <Redirect to="/" />}
            <Container>
              <Description>Войти с помощью</Description>
              <SocialNetworkList>
                {socialNetworkList.map(item => (
                  <SocialNetworkLink key={item.name} to="/">
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
                  <SignInButton
                    size="large"
                    secondary
                    onClick={this.handleLogin}
                  >
                    Войти
                  </SignInButton>
                </Link>
              </Form>
              <Description>
                <Link to="/forgot -password">Забыли пароль?</Link>
              </Description>
            </Container>
            <Container>
              <Description>Нет учетной записи?</Description>
              <Description>
                <Link to="/sign-up">Зарегистрироваться</Link>
              </Description>
            </Container>
          </>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default SignIn;