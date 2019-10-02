import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { AuthContext } from '../../core/auth/index';

import {
  Container,
  SocialNetworkList,
  SocialNetworkLink,
  Description,
  Form,
  Label,
  StyledInput,
  SignInButton,
} from './styles';
import { getPageUrl } from '../RouteResolver';
import { startLoginPasswordSignup } from '../../store/modules/auth/actions';

const socialNetworkList = [
  {
    name: 'Facebook',
    id: 'fb',
    url: getPageUrl('HOME'),
  },
  {
    name: 'Google',
    id: 'gl',
    url: getPageUrl('HOME'),
  },
  {
    name: 'VK',
    id: 'vk',
    url: getPageUrl('HOME'),
  },
  {
    name: 'Instagram',
    id: 'in',
    url: getPageUrl('HOME'),
  },
];

const inputList = [
  {
    placeholder: 'Адрес эл. почты*',
    type: 'email',
  },
  {
    placeholder: 'Имя*',
    type: 'text',
  },
  {
    placeholder: 'Пароль*',
    type: 'password',
  },
  {
    placeholder: 'Конт. тел*',
    type: 'tel',
  },
];

const descriptionText = 'Зарегистрироваться через';

const Signup = props => {
  // TODO: Control creds in state of this component
  const { loggedIn } = React.useContext(AuthContext);
  const dispatch = useDispatch();

  // TODO: Give creds from state to this method
  const handleSignup = () => {
    dispatch(startLoginPasswordSignup(/* creds from state */));
  };

  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          {// if user is logged in, redirect them away from sign-up page
          loggedIn && <Redirect to={getPageUrl('HOME')} />}
          <Container>
            <Description>{descriptionText}</Description>
            <SocialNetworkList>
              {socialNetworkList.map(item => (
                <SocialNetworkLink to={item.url} key={item.name}>
                  {item.id}
                </SocialNetworkLink>
              ))}
            </SocialNetworkList>
          </Container>
          <Container>
            <Form>
              {inputList.map(item => (
                <Label key={item.type}>
                  <StyledInput {...item} />
                </Label>
              ))}
              <Link to={getPageUrl('HOME')}>
                <SignInButton size="large" secondary onClick={handleSignup}>
                  Зарегистрироваться
                </SignInButton>
              </Link>
            </Form>
            <Description>Есть учетная запись?</Description>
            <Description>
              <Link to={getPageUrl('SIGN-IN')}>Войти</Link>
            </Description>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Signup;
