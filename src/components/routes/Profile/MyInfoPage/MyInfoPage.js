import React from 'react';
import { MyInfoForm } from './MyInfoForm/MyInfoForm';

import { MyInfoPageContainer, Title } from './styles';

export const MyInfoPage = () => {
  return (
    <MyInfoPageContainer>
      <Title>Моя информация</Title>
      <MyInfoForm />
    </MyInfoPageContainer>
  );
};
