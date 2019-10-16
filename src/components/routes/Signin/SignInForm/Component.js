import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledEmailInput,
  StyledPasswordInput,
  SignInButton,
  ErrorMessage,
} from './styles';
import { SignInFormContext } from './SignInFormContext';
import { formValidator } from '../../../../services';

const SignInForm = ({ logIn, isSubmitting }) => {
  return (
    <StyledForm
      onSubmit={logIn}
      isSubmitting={isSubmitting}
      verify={formValidator.verifySignInForm}
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

SignInForm.propTypes = {
  logIn: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default SignInForm;
