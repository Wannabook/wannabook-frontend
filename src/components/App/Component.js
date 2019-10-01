import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { isEmpty } from 'ramda';

import { ACCESS_TOKEN } from '../../constants';
import AppRoutes from '../../routes/index';
import Header from '../../components/Header';
import { AuthContext } from '../../core/auth/index';

const hasToken = localStorage.getItem(ACCESS_TOKEN);

const App = props => {
  const { user, loadUser, error } = props;

  useEffect(() => {
    hasToken && loadUser();
  }, [user]);

  const isLoggedIn = !isEmpty(user) && !error;

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <Normalize />
      <Header />
      <AppRoutes />
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
