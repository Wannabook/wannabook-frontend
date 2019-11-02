import { connect } from 'react-redux';

import { getOrganizations, getOrganizationsLoadingProps } from 'store';

import { loadOrganizations } from '../../store/organizations/actionCreators';
import Component from './Component';

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
