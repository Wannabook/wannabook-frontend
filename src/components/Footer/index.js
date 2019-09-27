import React from 'react';

import { FooterContainer } from './styles';

const Footer = () => (
  <FooterContainer>{`${new Date().getFullYear()} © WANNABOOK`}</FooterContainer>
);

export default Footer;
