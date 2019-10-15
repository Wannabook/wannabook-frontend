import React from 'react';

import { ACCESS_TOKEN, AUTH_METHOD } from '../../constants';

export default class Signout extends React.Component {
  componentDidMount() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(AUTH_METHOD);
    location.href = '/'; // temp solution
  }

  render() {
    return null;
  }
}
