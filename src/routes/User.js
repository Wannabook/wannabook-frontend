import React from 'react';

export default class Company extends React.Component {
  render() {
    console.warn('this.props', this.props);
    return <div>{this.props.name}</div>;
  }
}
