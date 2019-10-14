import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { AuthContext } from '../../core/auth/index';

import { AuthNetworkList } from '../../components/AuthNetworkList/AuthNetworkList.js';

import { SignUpContainer, Description } from './styles';
import { getPageUrl } from '../RouteResolver';
import { SignUpForm } from './SignUpForm/SignUpForm';

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
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SignUpContainer>
      {// if user is logged in, redirect them away from sign-up page
      isLoggedIn && <Redirect to={getPageUrl('HOME')} />}
      <Description>{descriptionText}</Description>
      <AuthNetworkList />
      <SignUpForm />
      <Description>Есть учетная запись?</Description>
      <Description>
        <Link to={getPageUrl('SIGN-IN')}>Войти</Link>
      </Description>
    </SignUpContainer>
  );
};

export default SignUp;
