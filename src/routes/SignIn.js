import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../ui-kit/components/Button';
import Input from '../ui-kit/components/Input';

const Container = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

const SocialNetworkList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const SocialNetworkLink = styled(Link)`
  border-radius: 50%;
  border: solid blue 1px;
  flex-basis: 32px;
  height: 32px;
  margin: 8px;
`;

const Description = styled.p`
  text-align: center;
`;

const Form = styled.form`
  padding: 20px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled(Input)`
  &&& {
    width: 100%;
    &&& input {
      border-radius: 0;
    }
  }
`;

const SignInButton = styled(Button)`
  &&& {
    display: block; //probably need additional type of button with display:block
    border-radius: 0;
    margin: 16px 0;
    width: 100%;
  }
`;

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
          <Link to="/">Зарегистрироваться</Link>
        </Description>
      </Container>
    </>
  );
};

export default SignIn;
