import React from 'react';
import { Link } from 'react-router-dom';

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

const SignIn = () => {
  return (
    <>
      <Container>
        <Description>{descriptionText}</Description>
        <SocialNetworkList>
          {socialNetworkList.map(item => (
            <SocialNetworkLink to="/" key={item.name}>
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
            <SignInButton size="large" secondary>
              Зарегистрироваться
            </SignInButton>
          </Link>
        </Form>
        <Description>Есть учетная запись?</Description>
        <Description>
          <Link to="/sign-in">Войти</Link>
        </Description>
      </Container>
    </>
  );
};

export default SignIn;
