import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPageUrl } from 'routes/RouteResolver';
import { signOut } from 'store';

import { Action } from 'typesafe-actions';

import { ProfileLink } from './ProfileLink';
import { ProfileImage } from './ProfileImage';

import notifications from './images/notifications.svg';
import myinfo from './images/my_info_icon.svg';
import bonuses from './images/bonuses_icon.svg';
import bookedEvents from './images/booked_events_icon.svg';
import favorites from './images/favorites_icon.svg';
import exit from './images/exit_icon.svg';

import { MainProfilePageContainer } from './styles';

import { AuthContext } from '../../../App/contexts';

interface ProfileLink {
  url: string;
  text: string;
  icon: HTMLImageElement;
  notificationsAmount: number | null;
  onClick?: () => (e: React.SyntheticEvent<MouseEvent>) => void;
  actionToDispatch?: () => Action;
}

const profileLinksData: ProfileLink[] = [
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
  const { isLoggedIn, userLoaded } = useContext(AuthContext);

  return (
    <MainProfilePageContainer>
      {!isLoggedIn && userLoaded && <Redirect to={getPageUrl('AUTH')} />}
      <ProfileImage />
      {profileLinksData.map(link => {
        const handleClick = () => {
          link.onClick?.(); // call function if exists
          link.actionToDispatch && dispatch(link.actionToDispatch()); // call function if exists
        };

        return (
          <ProfileLink
            key={link.text}
            to={link.url}
            icon={link.icon}
            notificationsAmount={link.notificationsAmount}
            onClick={handleClick}
          >
            {link.text}
          </ProfileLink>
        );
      })}
    </MainProfilePageContainer>
  );
};
