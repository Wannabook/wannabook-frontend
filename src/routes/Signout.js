import React from 'react';

import { JWT_TOKEN } from '../constants';

export default class Signout extends React.Component {
  componentDidMount() {
    localStorage.removeItem(JWT_TOKEN);
    location.href = '/'; // temp solution
  }

  render() {
    return null;
  }
}
