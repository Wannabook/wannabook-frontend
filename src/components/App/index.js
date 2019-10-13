import { connect } from 'react-redux';

import Component from './Component';
import { loadUser } from '../../store/modules/user/actionCreators';
import { getUser, getLogInLoadingProps } from '../../store/modules/auth/logIn';

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
