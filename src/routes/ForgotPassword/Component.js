import React, { useEffect } from 'react';
import PasswordRecovery from '../../components/PasswordRecovery/index';
import GratitudePage from '../../components/GratitudePage/index';
import Loading from '../../components/Loading';

const Component = props => {
  useEffect(
    () => () => {
      const { resetLoadedProps } = props;
      resetLoadedProps();
    },
    []
  );

  const cbSendNewPassword = email => {
    const { sendPassword } = props;
    sendPassword(email);
  };

  const { loading, loaded, error } = props;

  return (
    <>
      {loading ? (
        <Loading />
      ) : loaded ? (
        <GratitudePage />
      ) : (
        <PasswordRecovery cbFunction={cbSendNewPassword} />
      )}
    </>
  );
};

export default Component;
