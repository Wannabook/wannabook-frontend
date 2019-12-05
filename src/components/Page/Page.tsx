import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { RoutesContainer } from '../App/styles';
import { AppRoutes } from '../../routes';

import { StyledPage } from './style';

export const Page = () => (
  <StyledPage className="page">
    <Header />
    <RoutesContainer className="routes-container">
      <AppRoutes />
    </RoutesContainer>
    <Footer />
  </StyledPage>
);
