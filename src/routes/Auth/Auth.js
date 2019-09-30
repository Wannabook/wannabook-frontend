import React from 'react';
import { Link } from 'react-router-dom';

import { getPageUrl } from '../RouteResolver';

import { Description, Illustration, SignInButton } from './styles';

const buttons = [
  {
    url: getPageUrl('SIGN-IN'),
    type: { secondary: true, size: 'large' },
    btnText: 'Войти',
  },
  {
    url: getPageUrl('SIGN-UP'),
    type: { secondary: true, size: 'large' },
    btnText: 'Зарегистрироваться',
  },
];

const descriptionText =
  'Наличие профиля поможет Вам без труда бронировать услуги на нашем сайте';

const Registration = () => {
  return (
    <>
      <Description>
        <Illustration src="" alt="Illustration" />
        <p>{descriptionText}</p>
      </Description>
      {buttons.map(item => (
        <Link to={item.url} key={item.url}>
          <SignInButton {...item.type}>{item.btnText}</SignInButton>
        </Link>
      ))}
    </>
  );
};

export default Registration;
