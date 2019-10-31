import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ProfileLink } from './ProfileLink/ProfileLink';
import { ProfileImage } from './ProfileImage/ProfileImage';

import notifications from './images/notifications.svg';
import myinfo from './images/my_info_icon.svg';
import bonuses from './images/bonuses_icon.svg';
import bookedEvents from './images/booked_events_icon.svg';
import favorites from './images/favorites_icon.svg';
import exit from './images/exit_icon.svg';

import { MainProfilePageContainer } from './styles';

import { getPageUrl } from '../../../../routes/RouteResolver';
import { AuthContext } from '../../../App/contexts';
import { signOut } from '../../../../store/auth/user';

const profileLinksData = [
  {
    url: '/',
    text: 'Мои уведомления',
    icon: notifications,
    notificationsAmount: 2,
  },
  {
    url: `${getPageUrl('PROFILE')}/123456/my-info`,
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
    actionToDispatch: signOut,
  },
];

export const MainProfilePage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <MainProfilePageContainer>
      {!isLoggedIn && <Redirect to={getPageUrl('AUTH')} />}
      <ProfileImage />
      {profileLinksData.map(link => {
        return (
          <ProfileLink
            key={link.text}
            to={link.url}
            icon={link.icon}
            notificationsAmount={link.notificationsAmount}
            onClick={() => {
              link.onClick?.(); // call function if exists
              dispatch(link.actionToDispatch?.()); // call function if exists
            }}
          >
            {link.text}
          </ProfileLink>
        );
      })}
    </MainProfilePageContainer>
  );
};
