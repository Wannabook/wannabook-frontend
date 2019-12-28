import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getSignInError,
  getLogInLoadingProps,
  logInAction,
  clearLoginError,
  SignInRequestPayload,
} from 'store';

import {
  StyledForm,
  StyledEmailInput,
  StyledPasswordInput,
  SignInButton,
  ErrorMessage,
} from './styles';
import { SignInFormContext } from './SignInFormContext';
import { SignInError } from './SignInError';

export const SignInForm = () => {
  const { loading: isSubmitting } = useSelector(getLogInLoadingProps);
  const dispatch = useDispatch();
  const logIn = (data: SignInRequestPayload) =>
    dispatch(logInAction.request(data));
  const errorFromServer = useSelector(getSignInError);

  React.useEffect(() => {
    dispatch(clearLoginError());
  }, [dispatch]);

  return (
    <StyledForm
      onSubmit={() => logIn}
      isSubmitting={isSubmitting}
      formName="signIn"
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
      <SignInError error={errorFromServer} />
      <SignInButton type="submit" size="large" primary>
        Войти
      </SignInButton>
    </StyledForm>
  );
};
