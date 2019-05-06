import React from 'react';
import { Link } from 'react-router-dom';

export default class AuthPage extends React.Component {
  render() {
    return (
      <>
        <div>
          <Link to="/login">Log in</Link>
        </div>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
      </>
    );
  }
}
