import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyInfoFormContext } from './MyInfoFormContext';
import { ChangePassword } from '../ChangePassword/ChangePassword';
import { GenderToggle } from './GenderToggle/GenderToggle';

import { getUserInfo } from '../../selectors';
// import { changePassword } from '../../../../../../store/modules/auth/changePassword';
// import { getChangePasswordLoadingProps } from '../../../../../../store/modules/auth/changePassword';

import {
  StyledForm,
  Label,
  StyledTextInput,
  StyledEmailInput,
  ChangePasswordButton,
  ErrorMessage,
} from './styles';

export const MyInfoForm = () => {
  const {
    name = '',
    email = '',
    surname = '',
    birthdate = '',
    district = '',
  } = useSelector(getUserInfo);
  const { loading: isSubmitting } = { loading: false };
  const dispatch = useDispatch();
  const handleSubmit = data =>
    dispatch(() => ({ type: 'SAVE_USER_INFO', payload: data }));

  return (
    <StyledForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      formName="changePassword"
      formContext={MyInfoFormContext}
    >
      <Label htmlFor="user-name-input">Имя*</Label>
      <StyledTextInput
        id="user-name-input"
        type="text"
        name="name"
        defaultValue={name}
        placeholder="Введите Ваше имя"
        pattern="^[a-zA-Z]+$"
        required
      />
      <Label htmlFor="user-surname-input">Фамилия</Label>
      <StyledTextInput
        id="user-surname-input"
        type="text"
        name="surname"
        defaultValue={surname}
        placeholder="Введите Вашу фамилию"
        pattern="^[a-zA-Z]+$"
      />
      <Label htmlFor="user-birthdate-input">Дата рождения</Label>
      <StyledTextInput
        id="user-birthdate-input"
        type="date"
        name="birthdate"
        defaultValue={birthdate}
        placeholder="DD/MM/YYYY"
        pattern="^[a-zA-Z]+$"
      />
      <GenderToggle />
      <Label htmlFor="user-email-input">Адрес эл. почты</Label>
      <StyledEmailInput
        id="user-email-input"
        type="email"
        name="email"
        defaultValue={email}
        placeholder="Адрес эл. почты*"
        required
      />
      <Label htmlFor="user-district-input">Микрорайон</Label>
      <StyledTextInput
        id="user-district-input"
        type="text"
        name="district"
        defaultValue={district}
        placeholder="Введите Ваш микрорайон"
        pattern="^[a-zA-Z]+$"
      />
      <ChangePassword />
      <ErrorMessage />
      <ChangePasswordButton type="submit" size="large" primary>
        Сохранить изменения
      </ChangePasswordButton>
    </StyledForm>
  );
};
