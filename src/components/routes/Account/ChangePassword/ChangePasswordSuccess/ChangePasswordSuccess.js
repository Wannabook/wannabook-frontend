import React from 'react';

import {
  ChangePasswordSuccessContainer,
  Illustration,
  Description,
} from './styles';
import gratitudeImage from './images/done.svg';

export const ChangePasswordSuccess = () => {
  return (
    <ChangePasswordSuccessContainer>
      <Illustration src={gratitudeImage} alt="Thank you" />
      <Description>Ваш пароль был успешно изменен!</Description>
    </ChangePasswordSuccessContainer>
  );
};
