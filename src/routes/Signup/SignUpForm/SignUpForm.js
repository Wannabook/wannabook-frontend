import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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
import { formValidator } from '../../../services';

import { signUpRequest } from '../../../store/modules/auth/logIn';
import { getLogInLoadingProps } from '../../../store/modules/auth/logIn';

export const SignUpForm = () => {
  const isSubmitting = useSelector(getLogInLoadingProps).loading;
  const dispatch = useDispatch();
  const signUp = data => dispatch(signUpRequest(data));

  return (
    <StyledForm
      onSubmit={signUp}
      isSubmitting={isSubmitting}
      verify={formValidator.verifySignUpForm}
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

// SignUpForm.propTypes = {
//   signUp: PropTypes.func.isRequired,
//   isSubmitting: PropTypes.bool.isRequired,
// };
