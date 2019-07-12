import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { AuthContext } from '../../core/auth/index';
import { links } from './links';
import {
  StyledIcon,
  StyledLink,
  StyledMenu,
  StyledMobileBar,
  StyleMenuItem,
  Hamburger,
} from './styles';
import { getPageUrl } from '../../routes/RouteResolver';

const UserIcon = () => {
  // TODO Use different links depending on loggedIn value
  return (
    <AuthContext.Consumer>
      {loggedIn => {
        // we will then make user/:id dynamic depending on id coming from backend
        return loggedIn ? (
          <Link to={`${getPageUrl('ACCOUNT')}/123456`}>
            <StyledIcon name="user outline" />
          </Link>
        ) : (
          <Link to={getPageUrl('AUTH')}>
            <StyledIcon name="user outline" />
          </Link>
        );
      }}
    </AuthContext.Consumer>
  );
};

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  return (
    <Grid className="navigation">
      <Grid.Row stretched only="mobile tablet" columns="1">
        <Grid.Column>
          <StyledMobileBar>
            <Hamburger open={open} onClick={handleOpenMenu}>
              <span />
              <span />
              <span />
              <span />
            </Hamburger>
            <UserIcon />
          </StyledMobileBar>
          <StyledMenu open={open} className="menu">
            {links.map(
              link =>
                link.mobile && (
                  <StyleMenuItem key={link.url}>
                    <StyledLink to={link.url}>{link.linkText}</StyledLink>
                  </StyleMenuItem>
                )
            )}
          </StyledMenu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NavigationMobile;
