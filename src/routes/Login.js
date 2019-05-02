import React from 'react';
import { Redirect } from 'react-router-dom';

import { JWT_TOKEN } from '../constants';
import { AuthContext } from '../core/auth/index';

export default class Login extends React.Component {
  handleLogin = () => {
    localStorage.setItem(JWT_TOKEN, 'erglehrgerg');
    location.href = '/'; // for now :)
  };

  render() {
    return (
      <AuthContext.Consumer>
        {loggedIn => (
          <>
            <div>Login page</div>
            {// if user is logged in, redirect them away from login page
            loggedIn && <Redirect to="/" />}
            <button onClick={this.handleLogin}>Log in</button>
          </>
        )}
      </AuthContext.Consumer>
    );
  }
}
