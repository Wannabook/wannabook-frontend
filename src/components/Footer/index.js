import React from 'react';

import { FooterContainer, CopyRight, ForBusinessButton } from './styles';

const Footer = () => (
  <FooterContainer>
    <CopyRight>
      {`© ${new Date().getFullYear()} Wannabook Inc. Все права защищены.`}
    </CopyRight>
    <ForBusinessButton>Для бизнеса</ForBusinessButton>
  </FooterContainer>
);

export default Footer;
