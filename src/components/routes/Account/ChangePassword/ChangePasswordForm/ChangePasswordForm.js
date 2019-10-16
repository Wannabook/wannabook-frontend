import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Title,
  StyledForm,
  Label,
  StyledPasswordInput,
  ChangePasswordButton,
  ErrorMessage,
  CancelButton,
} from './styles';
import { ChangePasswordFormContext } from './ChangePasswordFormContext';
import { formValidator } from '../../../../../services';

import { changePassword } from '../../../../../store/modules/auth/changePassword';
import { getChangePasswordLoadingProps } from '../../../../../store/modules/auth/changePassword';

export const ChangePasswordForm = () => {
  const { loading: isSubmitting } = useSelector(getChangePasswordLoadingProps);
  const dispatch = useDispatch();
  const handleSubmit = data => dispatch(changePassword(data));

  return (
    <>
      <Title>Смена пароля</Title>
      <StyledForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        verify={formValidator.verifyForgotPasswordForm}
        formContext={ChangePasswordFormContext}
      >
        <Label for="old-password-input">Старый пароль</Label>
        <StyledPasswordInput
          id="old-password-input"
          name="old-password"
          placeholder="Пароль*"
          required
        />
        <Label for="new-password-input">Новый пароль</Label>
        <StyledPasswordInput
          id="new-password-input"
          name="new-password"
          placeholder="Пароль*"
          required
        />
        <Label for="repeat-password-input">Повторите новый пароль</Label>
        <StyledPasswordInput
          id="repeat-password-input"
          name="repeat-password-input"
          placeholder="Пароль*"
          required
        />
        <ErrorMessage />
        <ChangePasswordButton type="submit" size="large" primary>
          Изменить пароль
        </ChangePasswordButton>
      </StyledForm>
      <CancelButton secondary>Отменить</CancelButton>
    </>
  );
};
