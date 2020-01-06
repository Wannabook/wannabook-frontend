import React from 'react';
import { useSelector } from 'react-redux';

import { Profile } from 'types';

import { getUserInfo } from '../../selectors';

import { ProfileImageContainer, Avatar, Title } from './styles';

export const ProfileImage = () => {
  const user: Profile | null = useSelector(getUserInfo);
  const avatar = user ? user.picture : null;

  return (
    <ProfileImageContainer>
      <Avatar avatar={avatar} />
      <Title>{name || 'John Gold'}</Title>
    </ProfileImageContainer>
  );
};
