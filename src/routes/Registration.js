import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../ui-kit/components/Button';

const Container = styled.div`
  margin: 16px;
`;

const Description = styled.div`
  text-align: center;
  margin: 0px 36px 36px;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;

const Illustration = styled.img`
  border: solid 1px black;
  margin: 16px;
  display: inline-block;
  width: 110px; //temporary solution
  height: 120px;
`;

const SignInButton = styled(Button)`
  &&& {
    display: block; //probably need additional type of button with display:block
    border-radius: 0;
    margin: 16px 0;
    width: 100%;
  }
`;

const buttons = [
  {
    url: '/sign-in',
    type: { secondary: true },
    size: 'large',
    btnText: 'Войти',
  },
  {
    url: '/',
    type: { secondary: true },
    size: 'large',
    btnText: 'Зарегистрироваться',
  },
];

const descriptionText =
  'Наличие профиля поможет Вам без труда бронировать услуги на нашем сайте';

const Registration = () => {
  return (
    <>
      <Container>
        <Description>
          <Illustration src={''} alt={'Illustration'} />
          <p>{descriptionText}</p>
        </Description>
        {buttons.map(item => (
          <Link to={item.url} key={item.url}>
            <SignInButton size={item.size} {...item.type}>
              {item.btnText}
            </SignInButton>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Registration;
