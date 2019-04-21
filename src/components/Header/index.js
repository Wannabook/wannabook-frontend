import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';

const Header = props => {
  return (
    <>
      <Navigation />
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
