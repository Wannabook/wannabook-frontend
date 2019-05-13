import { connect } from 'react-redux';

import { loadOrganizations } from '../../store/modules/organizations/actionCreators';
import Component from './Component';
import {
  getOrganizations,
  getOrganizationsLoadingProps,
} from '../../store/modules/organizations/selectors';

const mapStateToProps = () => {
  return globalState => {
    return {
      ...getOrganizationsLoadingProps(globalState),
      organization: getOrganizations(globalState),
    };
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadOrganizations: () => dispatch(loadOrganizations()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
