import React from 'react';
import { Link } from 'react-router-dom';
import { getPageUrl } from '../../../../routes/RouteResolver';
import { ChangePassword } from '../ChangePassword/ChangePassword';

import { StyledProfileLink, Illustration } from './styles';
import notifications from './images/notifications.svg';

export const MainProfilePage = () => {
  return (
    <>
      <div>Main profile page</div>
      <StyledProfileLink to="/">Мои уведомления</StyledProfileLink>
      {/*<StyledProfileLink to={getPageUrl('SIGN-OUT')}>Log out</StyledProfileLink>*/}
      <Illustration src={notifications} alt="Thank you" />
      <ChangePassword />
    </>
  );
};
