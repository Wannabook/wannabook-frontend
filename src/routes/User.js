import React from 'react';
import { Link } from 'react-router-dom';

export default class User extends React.Component {
  render() {
    return (
      <div>
        <div>User page</div>
        <Link to="/logout">Log out</Link>
      </div>
    );
  }
}
