import { connect } from 'react-redux';

import { loadOrganizations } from '../../store/organizations/actionCreators';
import Component from './Component';
import {
  getOrganizations,
  getOrganizationsLoadingProps,
} from '../../store/organizations/selectors';

const mapStateToProps = () => state => ({
  ...getOrganizationsLoadingProps(state),
  organization: getOrganizations(state),
});

const mapDispatchToProps = dispatch => {
  return {
    loadOrganizations: () => dispatch(loadOrganizations()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
