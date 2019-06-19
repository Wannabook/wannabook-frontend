import React, { useState } from 'react';
import Index from '../../components/PasswordRecovery/index';
import Gratitude from '../../components/GratitudePage/index';

const ForgotPassword = props => {
  const [isSent, sentStatus] = useState(false);
  const [isSending, sendingStatus] = useState(false);

  const cbSendNewPassword = email => {
    sendingStatus(true);

    console.log('email', email);

    setTimeout(() => {
      //model of password sending process - temporary solution
      sentStatus(true);
      sendingStatus(false);
    }, 1000);
  };

  return (
    <>
      {isSending ? (
        <p>...loading</p>
      ) : isSent ? (
        <Gratitude />
      ) : (
        <Index cbFunction={cbSendNewPassword} />
      )}
    </>
  );
};

export default ForgotPassword;
