import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthNetworkList, SignUpForm } from 'components';

import { AuthContext } from '../../components/App/contexts';
import { getPageUrl } from '../RouteResolver';

import { SignUpContainer, Description, SignInLink } from './styles';

const SignUp = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SignUpContainer>
      {// if user is logged in, redirect them away from sign-up page
      isLoggedIn && <Redirect to={getPageUrl('HOME')} />}
      <Description>Зарегистрироваться через</Description>
      <AuthNetworkList />
      <SignUpForm />
      <Description>Есть учетная запись?</Description>
      <SignInLink to={getPageUrl('SIGN-IN')}>Войти</SignInLink>
    </SignUpContainer>
  );
};

export default SignUp;
