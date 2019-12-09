import React from 'react';

import { CategoryMenuItem } from './types';
import { MenuHeader, MenuItem } from './styles';

interface MenuProp {
  header?: string;
  menuItemsList: Array<CategoryMenuItem>;
}

export const Menu: React.FC<MenuProp> = ({ header, menuItemsList }) => {
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
