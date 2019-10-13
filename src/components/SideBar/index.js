import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';

import { Container } from '../../ui-kit/components/Layout/Container';

const NavigationSideBar = ({ visible, onHide, direction, children }) => {
  return (
    <Sidebar
      as={Container}
      animation="overlay"
      icon="labeled"
      direction={direction}
      inverted
      onHide={onHide}
      vertical
      visible={visible}
    >
      {children}
    </Sidebar>
  );
};

NavigationSideBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default NavigationSideBar;
