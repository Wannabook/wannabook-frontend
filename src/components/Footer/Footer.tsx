import React from 'react';

import { FooterContainer, CopyRight, ForBusinessButton } from './styles';

export const Footer = () => (
  <FooterContainer>
    <CopyRight>
      {`© ${new Date().getFullYear()} Wannabook Inc. Все права защищены.`}
    </CopyRight>
    <ForBusinessButton>Для бизнеса</ForBusinessButton>
  </FooterContainer>
);
