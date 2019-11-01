import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledForm,
  StyledEmailInput,
  SignInButton,
  ErrorMessage,
} from './styles';
import { ForgotPasswordFormContext } from './ForgotPasswordFormContext';

import { forgotPassword } from '../../../../store/auth/forgotPassword';
import { getForgotPasswordLoadingProps } from '../../../../store/auth/forgotPassword';

export const ForgotPasswordForm = () => {
  const { loading: isSubmitting } = useSelector(getForgotPasswordLoadingProps);
  const dispatch = useDispatch();
  const handleSubmit = data => dispatch(forgotPassword(data));

  return (
    <StyledForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      formName="forgotPassword"
      formContext={ForgotPasswordFormContext}
    >
      <StyledEmailInput
        type="email"
        name="email"
        placeholder="Адрес эл. почты*"
        required
      />
      <ErrorMessage />
      <SignInButton type="submit" size="large" primary>
        Продолжить
      </SignInButton>
    </StyledForm>
  );
};
