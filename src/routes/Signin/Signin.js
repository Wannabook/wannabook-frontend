import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

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

import facebookIcon from './images/f.svg';
import vkIcon from './images/vk.svg';
import googleIcon from './images/vk.svg';
import odnoklassnikiIcon from './images/ok.svg';
import { Advantage } from '../../components/AdvantagesList/styles';

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

const SignIn = () => {
  const handleLogin = () => {
    localStorage.setItem(JWT_TOKEN, 'erglehrgerg');
    location.href = '/'; // for now :)
  };

  const { loggedIn } = useContext(AuthContext);

  return (
    <>
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
    </>
  );
};

export default SignIn;
