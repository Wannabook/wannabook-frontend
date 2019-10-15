import React from 'react';
import { Link } from 'react-router-dom';

import { getPageUrl } from '../RouteResolver';

import {
  RegistrationContainer,
  Title,
  Description,
  Illustration,
  SignInButton,
  SignUpButton,
} from './styles';

import authImage from './images/auth_image.svg';

const descriptionText =
  'Наличие профиля поможет без труда бронировать услуги на нашем сайте';

// TODO: don't let users in here if they are logged in

const Registration = () => {
  return (
    <RegistrationContainer>
      <Title>Всегда в теме!</Title>
      <Description>{descriptionText}</Description>
      <Illustration src={authImage} alt="Illustration" />
      <Link to={getPageUrl('SIGN-IN')} key={getPageUrl('SIGN-IN')}>
        <SignInButton primary size="large">
          Войти
        </SignInButton>
      </Link>
      <Link to={getPageUrl('SIGN-UP')} key={getPageUrl('SIGN-UP')}>
        <SignUpButton secondary size="large">
          Зарегистрироваться
        </SignUpButton>
      </Link>
    </RegistrationContainer>
  );
};

export default Registration;
