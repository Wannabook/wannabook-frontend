import React from 'react';
import { ChangePassword } from '../ChangePassword/ChangePassword';
import { ProfileLink } from './ProfileLink/ProfileLink';

import notifications from './images/notifications.svg';
import myinfo from './images/my_info_icon.svg';
import bonuses from './images/bonuses_icon.svg';
import bookedEvents from './images/booked_events_icon.svg';
import favorites from './images/favorites_icon.svg';
import exit from './images/exit_icon.svg';

import { MainProfilePageContainer } from './styles';

const profileLinksData = [
  {
    url: '/',
    text: 'Мои уведомления',
    icon: notifications,
    notificationsAmount: 2,
  },
  {
    url: '/',
    text: 'Моя информация',
    icon: myinfo,
    notificationsAmount: null,
  },
  {
    url: '/',
    text: 'Бонусы и скидки',
    icon: bonuses,
    notificationsAmount: null,
  },
  {
    url: '/',
    text: 'Забронированные события',
    icon: bookedEvents,
    notificationsAmount: null,
  },
  {
    url: '/',
    text: 'Избранное',
    icon: favorites,
    notificationsAmount: null,
  },
  {
    url: '/',
    text: 'Выйти',
    icon: exit,
    notificationsAmount: null,
  },
];
export const MainProfilePage = () => {
  return (
    <MainProfilePageContainer>
      {profileLinksData.map(link => {
        return (
          <ProfileLink
            key={link.text}
            to={link.url}
            icon={link.icon}
            notificationsAmount={link.notificationsAmount}
          >
            {link.text}
          </ProfileLink>
        );
      })}
      {/*<StyledProfileLink to={getPageUrl('SIGN-OUT')}>Log out</StyledProfileLink>*/}
      <ChangePassword />
    </MainProfilePageContainer>
  );
};
