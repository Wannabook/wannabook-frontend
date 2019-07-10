import { connect } from 'react-redux';

import Component from './Component';
import { changePassword } from '../../store/modules/client/actionCreators';

const mapDispatchToProps = dispatch => {
  return {
    changePassword: () => dispatch(changePassword()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Component);
