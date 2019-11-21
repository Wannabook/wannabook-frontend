import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAuthError, getLogInLoadingProps, signUpRequest } from 'store';

import {
  StyledForm,
  StyledEmailInput,
  StyledNameInput,
  StyledPasswordInput,
  StyledPhoneInput,
  Description,
  SignInButton,
  ErrorMessage,
} from './styles';
import { SignUpFormContext } from './SignUpFormContext';

export const SignUpForm = () => {
  const { loading: isSubmitting } = useSelector(getLogInLoadingProps);
  const dispatch = useDispatch();
  const signUp = data => dispatch(signUpRequest(data));

  return (
    <StyledForm
      onSubmit={signUp}
      isSubmitting={isSubmitting}
      formName="signUp"
      formContext={SignUpFormContext}
    >
      <StyledEmailInput
        type="email"
        name="email"
        placeholder="Адрес эл. почты*"
        required
      />
      <StyledNameInput
        type="text"
        name="name"
        placeholder="Имя*"
        pattern="^[a-zA-ZА-яЁё\s]+$"
        required
      />
      <StyledPasswordInput name="password" placeholder="Пароль*" required />
      <StyledPhoneInput
        type="text"
        name="phone"
        placeholder="Контактный номер*"
        // TODO we should review the regexp for number. I had troubles submitting form
        pattern="\+?[\d+\-?]+"
        required
      />
      <Description>
        Оставьте свой номер для связи с администраторами выбранных заведений
      </Description>
      <ErrorMessage />
      <SignInButton type="submit" size="large" primary>
        Зарегистрироваться
      </SignInButton>
    </StyledForm>
  );
};
