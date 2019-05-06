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
    placeholder: 'Пароль*',
    type: 'password',
  },
];

const SignIn = () => {
  return (
    <>
      <Container>
        <Description>Войти с помощью</Description>
        <SocialNetworkList>
          {socialNetworkList.map(item => (
            <SocialNetworkLink key={item.name} to="/">
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
              Войти
            </SignInButton>
          </Link>
        </Form>
        <Description>
          <Link to="/">Забыли пароль?</Link>
        </Description>
      </Container>
      <Container>
        <Description>Нет учетной записи?</Description>
        <Description>
          <Link to="/sign-up">Зарегистрироваться</Link>
        </Description>
      </Container>
    </>
  );
};

export default SignIn;
