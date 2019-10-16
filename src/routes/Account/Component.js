import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getPageUrl } from '../RouteResolver';
import { ChangePassword } from '../../components/routes/Account/ChangePassword/ChangePassword';

const Account = () => {
  return (
    <>
      <div>User page</div>
      <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
      <ChangePassword />
    </>
  );
};

Account.propTypes = {
  changePassword: PropTypes.func.isRequired,
  resetChangePasswordRequestState: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default Account;
