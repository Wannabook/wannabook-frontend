import React from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../selectors';

import { ProfileImageContainer, Avatar, Title } from './styles';

export const ProfileImage = () => {
  const { name, avatar } = useSelector(getUserInfo);

  return (
    <ProfileImageContainer>
      <Avatar avatar={avatar} />
      <Title>{name || 'John Gold'}</Title>
    </ProfileImageContainer>
  );
};
