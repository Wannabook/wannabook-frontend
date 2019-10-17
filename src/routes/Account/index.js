import { connect } from 'react-redux';

import Component from './Component';
import {
  changePassword,
  resetChangePasswordRequestState,
} from '../../store/auth/changePassword/actionCreators';
import { getChangePasswordLoadingProps } from '../../store/auth/changePassword';

const mapStateToProps = () => state => ({
  loading: getChangePasswordLoadingProps(state).loading,
  error: getChangePasswordLoadingProps(state).error,
  loaded: getChangePasswordLoadingProps(state).loaded,
});

const mapDispatchToProps = dispatch => {
  return {
    changePassword: () => dispatch(changePassword()),
    resetChangePasswordRequestState: () =>
      dispatch(resetChangePasswordRequestState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
