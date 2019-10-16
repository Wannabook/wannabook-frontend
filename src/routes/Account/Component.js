import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getPageUrl } from '../RouteResolver';
import ChangePassword from '../../components/routes/Account/ChangePassword';

const Account = ({
  changePassword,
  resetChangePasswordRequestState,
  loading,
  loaded,
}) => {
  return (
    <>
      <div>User page</div>
      <Link to={getPageUrl('SIGN-OUT')}>Log out</Link>
      <ChangePassword
        changePassword={changePassword}
        resetChangePasswordRequestState={resetChangePasswordRequestState}
        loading={loading}
        loaded={loaded}
      />
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
