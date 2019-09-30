import React from 'react';
import PropTypes from 'prop-types';

import { MenuHeader, MenuItem } from './styles.js';

const VerticalMenu = ({ header, menuItemsList }) => {
  return (
    <>
      <MenuHeader>{header}</MenuHeader>
      {menuItemsList.map(item => (
        <MenuItem
          key={item.text}
          to={item.url}
          activeStyle={{
            fontWeight: 'bold',
          }}
        >
          {item.text}
        </MenuItem>
      ))}
    </>
  );
};

VerticalMenu.propTypes = {
  header: PropTypes.string,
  menuItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default VerticalMenu;
