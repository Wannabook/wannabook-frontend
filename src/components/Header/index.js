import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from '../Navigation';

// const StyledHeader = styled.header`
//   height: 60px;
//   border: 2px solid blue;
// `;

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
