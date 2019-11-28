import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { SignInForm, AuthNetworkList } from 'components';

import { AuthContext } from '../../components/App/contexts';
import { getPageUrl } from '../RouteResolver';

import {
  SignInContainer,
  Description,
  ForgotPasswordLink,
  SignUpLink,
} from './styles';

const SignIn = () => {
  const { isLoggedIn, userLoaded } = useContext(AuthContext);

  return (
    <SignInContainer>
      {// if user is logged in, redirect them away from login page
      isLoggedIn && userLoaded && <Redirect to={getPageUrl('HOME')} />}
      <Description>Войти с помощью</Description>
      <AuthNetworkList />
      <SignInForm />
      <ForgotPasswordLink to={getPageUrl('FORGOT-PASSWORD')}>
        Забыли пароль?
      </ForgotPasswordLink>
      <Description>Нет учетной записи?</Description>
      <SignUpLink to={getPageUrl('SIGN-UP')}>Зарегистрироваться</SignUpLink>
    </SignInContainer>
  );
};

export default SignIn;
