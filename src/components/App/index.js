import { connect } from 'react-redux';

import Component from './Component';
import { loadUser } from '../../store/modules/user/actionCreators';
import {
  getUser,
  getUserLoadingProps,
} from '../../store/modules/user/selectors';

const mapStateToProps = () => globalState => ({
  ...getUserLoadingProps(globalState),
  user: getUser(globalState),
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
