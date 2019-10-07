import React from 'react';
import {
  StyledForm,
  StyledEmailInput,
  StyledPasswordInput,
  SignInButton,
  ErrorMessage,
} from './styles';
import { SignInFormContext } from './SignInFormContext';

const ApiClientSendForm = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('form submitted');
      resolve({ statusCode: 200, statusMessage: 'OK' });
    }, 1500);
  });
};

const verifySignInForm = ({ password }) => {
  return password.length < 6 ? { message: 'Password too short' } : null;
};

const SignInForm = () => {
  return (
    <StyledForm
      onSubmit={ApiClientSendForm}
      verify={verifySignInForm}
      formContext={SignInFormContext}
    >
      <StyledEmailInput
        type="email"
        name="email"
        placeholder="Адрес эл. почты*"
        required
      />
      <StyledPasswordInput name="password" placeholder="Пароль*" required />
      <ErrorMessage />
      <SignInButton type="submit" size="large" primary>
        Войти
      </SignInButton>
    </StyledForm>
  );
};

export default SignInForm;
