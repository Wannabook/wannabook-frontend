import React from 'react';
import { Redirect } from 'react-router-dom';
import { JWT_TOKEN } from '../constants';

export default class Logout extends React.Component {
  state = {
    loggedIn: !!localStorage.getItem(JWT_TOKEN),
  };

  handleLogout = () => {
    localStorage.removeItem(JWT_TOKEN);
    this.setState({ loggedIn: false });
  };

  renderRedirect = () => {
    if (!this.state.loggedIn) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>Logout page</div>
        {this.renderRedirect()}
        <button onClick={this.handleLogout}>Log out</button>
      </React.Fragment>
    );
  }
}
