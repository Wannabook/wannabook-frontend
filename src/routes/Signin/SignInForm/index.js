import { connect } from 'react-redux';

import Component from './Component';
import { logInRequest } from '../../../store/modules/auth/auth';
import { getLogInLoadingProps } from '../../../store/modules/auth/auth';

const mapStateToProps = () => state => ({
  isSubmitting: getLogInLoadingProps(state).loading,
  error: getLogInLoadingProps(state).error,
  loaded: getLogInLoadingProps(state).loaded,
});

const mapDispatchToProps = dispatch => {
  return {
    logIn: data => dispatch(logInRequest(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
