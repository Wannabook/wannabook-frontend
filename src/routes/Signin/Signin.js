import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import { JWT_TOKEN } from '../../constants';
import { AuthContext } from '../../core/auth/index';

import {
  SignInContainer,
  SocialNetworkList,
  SocialNetworkLink,
  Description,
  ForgotPasswordLink,
  SignUpLink,
} from './styles';
import { getPageUrl } from '../RouteResolver';
import SignInForm from './SignInForm';

import facebookIcon from './images/f.svg';
import vkIcon from './images/vk.svg';
import googleIcon from './images/vk.svg';
import odnoklassnikiIcon from './images/ok.svg';

const socialNetworkList = [
  {
    name: 'Facebook',
    id: 'fb',
    url: getPageUrl('HOME'),
    icon: facebookIcon,
  },
  {
    name: 'VK',
    id: 'vk',
    url: getPageUrl('HOME'),
    icon: vkIcon,
  },
  {
    name: 'Google',
    id: 'gl',
    url: getPageUrl('HOME'),
    icon: googleIcon,
  },
  {
    name: 'Odnoklassniki',
    id: 'ok',
    url: getPageUrl('HOME'),
    icon: odnoklassnikiIcon,
  },
];

const SignIn = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <SignInContainer>
      {// if user is logged in, redirect them away from login page
      loggedIn && <Redirect to={getPageUrl('HOME')} />}
      <Description>Войти с помощью</Description>
      <SocialNetworkList>
        {socialNetworkList.map(item => (
          <SocialNetworkLink key={item.name} to={item.url}>
            <Image src={item.icon} />
          </SocialNetworkLink>
        ))}
      </SocialNetworkList>
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
