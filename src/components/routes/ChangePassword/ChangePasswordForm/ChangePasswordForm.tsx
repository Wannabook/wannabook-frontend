import React, {FormEvent} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changePassword, getChangePasswordLoadingProps } from 'store';

import {
  StyledForm,
  Label,
  StyledPasswordInput,
  ChangePasswordButton,
  ErrorMessage,
} from './styles';
import { ChangePasswordFormContext } from './ChangePasswordFormContext';

export const ChangePasswordForm = () => {
  const { loading: isSubmitting } = useSelector(getChangePasswordLoadingProps);
  const dispatch = useDispatch();
  const handleSubmit = (data: React.SyntheticEvent<FormEvent>) =>
    dispatch(changePassword(data));

  return (
    <StyledForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      formName="changePassword"
      formContext={ChangePasswordFormContext}
    >
      <Label htmlFor="old-password-input">Старый пароль</Label>
      <StyledPasswordInput
        id="old-password-input"
        name="oldPassword"
        placeholder="Пароль*"
        required
      />
      <Label htmlFor="new-password-input">Новый пароль</Label>
      <StyledPasswordInput
        id="new-password-input"
        name="newPassword"
        placeholder="Пароль*"
        required
      />
      <Label htmlFor="repeat-password-input">Повторите новый пароль</Label>
      <StyledPasswordInput
        id="repeat-password-input"
        name="repeatPassword"
        placeholder="Пароль*"
        required
      />
      <ErrorMessage />
      <ChangePasswordButton type="submit" size="large" primary>
        Изменить пароль
      </ChangePasswordButton>
    </StyledForm>
  );
};
