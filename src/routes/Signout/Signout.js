import React from 'react';

import { ACCESS_TOKEN } from '../../constants';

export default class Signout extends React.Component {
  componentDidMount() {
    localStorage.removeItem(ACCESS_TOKEN);
    location.href = '/'; // temp solution
  }

  render() {
    return null;
  }
}
