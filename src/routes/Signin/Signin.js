import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { AuthContext } from '../../core/auth/index';
import { getPageUrl } from '../RouteResolver';
import { SocialNetworkIcon } from './styles';
import {
  startGoogleAuth,
  startLoginPasswordAuth,
} from '../../store/modules/auth/actions';

import {
  SignInContainer,
  SocialNetworkList,
  Description,
  ForgotPasswordLink,
  SignUpLink,
} from './styles';
import SignInForm from './SignInForm';

import facebookIcon from './images/f.svg';
import vkIcon from './images/vk.svg';
import googleIcon from './images/g.svg';
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

const SocialNetworkItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (item.id === 'gl') {
      dispatch(startGoogleAuth());
    }
  };

  return (
    <SocialNetworkIcon onClick={handleClick}>
      <Image src={item.icon} />
    </SocialNetworkIcon>
  );
};

SocialNetworkItem.propTypes = {
  item: PropTypes.object,
};

const SignIn = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SignInContainer>
      {// if user is logged in, redirect them away from login page
      isLoggedIn && <Redirect to={getPageUrl('HOME')} />}
      <Description>Войти с помощью</Description>
      <SocialNetworkList>
        {socialNetworkList.map(item => (
          <SocialNetworkItem item={item} key={item.id} />
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
