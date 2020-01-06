import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateUserInfo, updateUserInfoLoadingProps, getUser } from 'store';

import { MyInfoFormContext } from './MyInfoFormContext';
import { ChangePassword } from '../../../ChangePassword';
import { GenderToggle } from './GenderToggle';

import {
  StyledForm,
  Label,
  StyledTextInput,
  StyledBirthdateInput,
  StyledEmailInput,
  SaveUserInfoButton,
  ErrorMessage,
} from './styles';

export const MyInfoForm = () => {
  // TODO: feels like dark magic, as Michael says :)
  const user = useSelector(getUser) || {
    name: '',
    email: '',
    surname: '',
    birthdate: '',
    district: '',
    gender: null,
  };

  const {
    name = '',
    email = '',
    surname = '',
    birthdate = '',
    district = '',
    gender = null,
  } = user;

  const { loading: isSubmitting } = useSelector(updateUserInfoLoadingProps);
  const dispatch = useDispatch();

  // TODO: fix 'any' after we sync form data with backend
  const handleSubmit = (data: any) =>
    dispatch(updateUserInfo({ ...user, ...data }));

  return (
    <StyledForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      formName="userInfo"
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
      <StyledBirthdateInput
        id="user-birthdate-input"
        type="date"
        name="birthdate"
        defaultValue={birthdate}
        placeholder="DD/MM/YYYY"
        pattern="^[a-zA-Z]+$"
      />
      <GenderToggle userGender={gender} formContext={MyInfoFormContext} />
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
      />
      <ErrorMessage />
      <ChangePassword />
      <SaveUserInfoButton type="submit" size="large" primary>
        Сохранить изменения
      </SaveUserInfoButton>
    </StyledForm>
  );
};
