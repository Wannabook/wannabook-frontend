import { connect } from 'react-redux';

import Component from './Component';
import { loadUser } from '../../store/modules/auth/auth';
import { getUser, getLogInLoadingProps } from '../../store/modules/auth/auth';

const mapStateToProps = () => globalState => ({
  ...getLogInLoadingProps(globalState),
  isLoggedIn: !!getUser(globalState),
});

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
