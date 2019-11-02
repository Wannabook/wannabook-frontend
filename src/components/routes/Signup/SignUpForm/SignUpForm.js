import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLogInLoadingProps, signUpRequest } from 'store';

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
        pattern="^[a-zA-Z]+$"
        required
      />
      <StyledPasswordInput name="password" placeholder="Пароль*" required />
      <StyledPhoneInput
        type="text"
        name="phone"
        placeholder="Контактный номер*"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required
      />
      <Description>
        Оставьте свой номер для связи с администраторами выбранных заведений
      </Description>
      <ErrorMessage />
      <SignInButton type="submit" size="large" primary>
        Зарегестрироваться
      </SignInButton>
    </StyledForm>
  );
};
