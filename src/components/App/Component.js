import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import AppRoutes from '../../routes/index';
import Header from '../../components/Header';

export default class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    loadUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadUser();
  }

  componentWillUnmount() {
    console.warn('unmounting app');
  }

  render() {
    return (
      <>
        <Normalize />
        <Header />
        <AppRoutes />
      </>
    );
  }
}
