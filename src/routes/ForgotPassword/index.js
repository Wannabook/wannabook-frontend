import { connect } from 'react-redux';

import Component from './Component';
import { getForgotPasswordLoadingProps } from '../../store/modules/forgotPassword/selectors';
import {
  resetEmailForNewPassword,
  sendEmailForNewPassword,
} from '../../store/modules/forgotPassword/actionCreators';

const mapStateToProps = () => state => ({
  ...getForgotPasswordLoadingProps(state),
});

const mapDispatchToProps = dispatch => {
  return {
    sendPassword: email => dispatch(sendEmailForNewPassword(email)),
    resetLoadedProps: () => dispatch(resetEmailForNewPassword()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
