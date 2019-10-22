import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { ProfileImageContainer, Avatar, Title } from './styles';
import { getUser } from '../../../../../store/modules/auth/auth';

export const getUserInfo = createSelector(
  [getUser],
  user => {
    if (!user) return { name: null, avatar: null };

    return {
      name: user.name,
      avatar: user.avatar,
    };
  }
);

export const ProfileImage = () => {
  const { name, avatar } = useSelector(getUserInfo);

  return (
    <ProfileImageContainer>
      <Avatar avatar={avatar} />
      <Title>{name || 'John Gold'}</Title>
    </ProfileImageContainer>
  );
};
