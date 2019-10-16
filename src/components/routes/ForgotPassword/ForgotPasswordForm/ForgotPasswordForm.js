import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledForm,
  StyledEmailInput,
  SignInButton,
  ErrorMessage,
} from './styles';
import { ForgotPasswordFormContext } from './ForgotPasswordFormContext';
import { formValidator } from '../../../../services';

import { forgotPassword } from '../../../../store/modules/auth/forgotPassword';
import { getForgotPasswordLoadingProps } from '../../../../store/modules/auth/forgotPassword';

export const ForgotPasswordForm = () => {
  const { loading: isSubmitting } = useSelector(getForgotPasswordLoadingProps);
  const dispatch = useDispatch();
  const handleSubmit = data => dispatch(forgotPassword(data));

  return (
    <StyledForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      verify={formValidator.verifyForgotPasswordForm}
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
