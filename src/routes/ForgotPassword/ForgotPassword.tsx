import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ForgotPasswordForm, Gratitude } from 'components';

import { AuthContext } from '../../components/App/contexts';
import { getPageUrl } from '../RouteResolver';

import { ForgotPasswordContainer, Description } from './styles';
import { getForgotPasswordLoadingProps } from '../../store/auth/forgotPassword';

const ForgotPassword = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { loaded } = useSelector(getForgotPasswordLoadingProps);

  return (
    <ForgotPasswordContainer>
      {// if user is logged in, redirect them away from sign-up page
      isLoggedIn && <Redirect to={getPageUrl('HOME')} />}
      {loaded ? (
        <Gratitude />
      ) : (
        <>
          <Description>
            Для восстановления пароля введите адрес <br />
            Вашей электроной почты
          </Description>
          <ForgotPasswordForm />
        </>
      )}
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
