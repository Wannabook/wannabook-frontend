import React from 'react';

export default class User extends React.Component {
  render() {
    console.warn('this.props', this.props);
    return <div>User page</div>;
  }
}
