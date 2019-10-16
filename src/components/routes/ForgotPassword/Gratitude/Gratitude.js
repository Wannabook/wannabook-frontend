import React from 'react';

import { GratitudeContainer, Illustration, Title, Description } from './styles';
import gratitudeImage from './images/gratitude.svg';

export const Gratitude = () => {
  return (
    <GratitudeContainer>
      <Illustration src={gratitudeImage} alt="Thank you" />
      <Title>Спасибо!</Title>
      <Description>
        Вам на почту было отправлено письмо для восстановления пароля
      </Description>
    </GratitudeContainer>
  );
};
