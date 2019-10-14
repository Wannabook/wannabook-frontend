import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthNetworkList } from '../../components/AuthNetworkList/AuthNetworkList.js';
import { AuthContext } from '../../core/auth/index';

import {
  SignInContainer,
  Description,
  ForgotPasswordLink,
  SignUpLink,
} from './styles';
import { getPageUrl } from '../RouteResolver';
import SignInForm from './SignInForm';

const SignIn = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SignInContainer>
      {// if user is logged in, redirect them away from login page
      isLoggedIn && <Redirect to={getPageUrl('HOME')} />}
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
