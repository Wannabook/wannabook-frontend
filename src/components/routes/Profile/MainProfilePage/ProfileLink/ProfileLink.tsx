import React from 'react';

import { IconProps } from 'semantic-ui-react';

import { ProfileLinkContainer, Icon, NotificationIcon } from './styles';

export const ProfileLink: React.FC<IconProps> = props => {
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

ProfileLink.defaultProps = {
  notificationsAmount: null,
};
