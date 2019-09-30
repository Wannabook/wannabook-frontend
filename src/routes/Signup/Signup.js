import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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

const SignUp = props => {
  return (
    <AuthContext.Consumer>
      {loggedIn => (
        <>
          {// if user is logged in, redirect them away from sign-up page
          loggedIn && <Redirect to={getPageUrl('HOME')} />}
          <Container>
            <Description>{descriptionText}</Description>
            <SocialNetworkList>
              {socialNetworkList.map(item => (
                <SocialNetworkLink to={item.url} key={item.name}>
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
              <Link to={getPageUrl('HOME')}>
                <SignInButton size="large" secondary>
                  Зарегистрироваться
                </SignInButton>
              </Link>
            </Form>
            <Description>Есть учетная запись?</Description>
            <Description>
              <Link to={getPageUrl('SIGN-IN')}>Войти</Link>
            </Description>
          </Container>
        </>
      )}
    </AuthContext.Consumer>
  );
};

export default SignUp;
