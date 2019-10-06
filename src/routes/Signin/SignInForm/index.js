import React, { useContext } from 'react';
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

const verifySignInForm = ({ email, password }) => {
  return password.length > 6 ? { error: '' } : { error: 'Password too short' };
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
        formContext={SignInFormContext}
      />
      <StyledPasswordInput
        name="password"
        placeholder="Пароль*"
        required
        formContext={SignInFormContext}
      />
      <ErrorMessage formContext={SignInFormContext} />
      <SignInButton
        type="submit"
        size="large"
        primary
        formContext={SignInFormContext}
      >
        Войти
      </SignInButton>
    </StyledForm>
  );
};

export default SignInForm;
