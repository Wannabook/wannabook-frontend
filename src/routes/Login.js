import React from 'react';
import { Redirect } from 'react-router-dom';
import { JWT_TOKEN } from '../constants';

export default class Login extends React.Component {
  state = {
    loggedIn: !!localStorage.getItem(JWT_TOKEN),
  };

  handleLogin = () => {
    localStorage.setItem(JWT_TOKEN, true);
    this.setState({ loggedIn: true });
  };

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>Login page</div>
        {this.renderRedirect()}
        <button onClick={this.handleLogin}>Log in</button>
      </React.Fragment>
    );
  }
}
