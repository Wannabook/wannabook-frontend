import React from 'react';

import NavigationMobile from '../Navigation/NavMobile';
import NavigationDesktop from '../Navigation/NavDesktop';

const Header = props => (
  <>
    <NavigationMobile />
    <NavigationDesktop />
  </>
);

export default Header;
