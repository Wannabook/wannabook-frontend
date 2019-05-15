import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
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
    type: { secondary: true, size: 'large' },
    btnText: 'Войти',
  },
  {
    url: '/sign-up',
    type: { secondary: true, size: 'large' },
    btnText: 'Зарегистрироваться',
  },
];

const descriptionText =
  'Наличие профиля поможет Вам без труда бронировать услуги на нашем сайте';

const Registration = () => {
  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Container>
            <Description>
              <Illustration src="" alt="Illustration" />
              <p>{descriptionText}</p>
            </Description>
            {buttons.map(item => (
              <Link to={item.url} key={item.url}>
                <SignInButton {...item.type}>{item.btnText}</SignInButton>
              </Link>
            ))}
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Registration;
