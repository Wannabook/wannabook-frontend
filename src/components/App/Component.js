import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import { JWT_TOKEN } from '../../constants';
import AppRoutes from '../../routes/index';
import Header from '../../components/Header';
import { AuthContext } from '../../core/auth/index';

import { GlobalStyle } from './styles';

//TODO: Replace after connect to the real API
// const hasJWToken = () => localStorage.getItem(JWT_TOKEN);
const hasJWToken = () => true;

const App = props => {
  const { user, loadUser, error } = props;

  useEffect(() => {
    hasJWToken() && loadUser();
  }, []);

  const isLoggedIn = () => !!user && !error;

  return (
    <AuthContext.Provider value={isLoggedIn()}>
      <div>
        <Normalize />
        <GlobalStyle />
        <Header />
        <AppRoutes />
      </div>
    </AuthContext.Provider>
  );
};

App.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default App;
