import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import { JWT_TOKEN } from '../../constants';
import AppRoutes from '../../routes/index';
import Header from '../../components/Header';
import { AuthContext } from '../../core/auth/index';

export default class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    loadUser: PropTypes.func.isRequired,
  };

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    // TODO: extract to core/auth?
    if (hasJWToken()) {
      this.props
        .loadUser()
        .then(userInfo => {
          this.setState({ loggedIn: true });
        })
        .catch(error => {
          this.setState({ loggedIn: false });
        });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.loggedIn}>
        <Normalize />
        <Header />
        <AppRoutes />
      </AuthContext.Provider>
    );
  }
}

const hasJWToken = () => localStorage.getItem(JWT_TOKEN);
