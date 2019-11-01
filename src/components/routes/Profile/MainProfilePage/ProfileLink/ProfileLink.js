import React from 'react';
import PropTypes from 'prop-types';

import { ProfileLinkContainer, Icon, NotificationIcon } from './styles';

export const ProfileLink = props => {
  const { to, icon, children, notificationsAmount, onClick } = props;

  return (
    <ProfileLinkContainer to={to} onClick={onClick}>
      <Icon icon={icon} />
      {children}
      {notificationsAmount && (
        <NotificationIcon>{notificationsAmount}</NotificationIcon>
      )}
    </ProfileLinkContainer>
  );
};

ProfileLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  notificationsAmount: PropTypes.number,
  onClick: PropTypes.func,
};

ProfileLink.default = {
  notificationsAmount: null,
};
