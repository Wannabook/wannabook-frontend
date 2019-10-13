import React from 'react';
import Menu from '../common/Menu';

import { CategoryListMenuContainer } from './styles';

const menuItemsList = [
  {
    text: 'Парикмахерские',
    url: '/category/1',
  },
  {
    text: 'Спа и уход за кожей',
    url: '/category/2',
  },
  {
    text: 'Массаж',
    url: '/category/3',
  },
  {
    text: 'Маникюр',
    url: '/category/4',
  },
  {
    text: 'Педикюр',
    url: '/category/5',
  },
  {
    text: 'Уход для животных',
    url: '/category/6',
  },
];

const RightSidebarMenu = () => {
  return (
    <CategoryListMenuContainer>
      <Menu menuItemsList={menuItemsList} />
    </CategoryListMenuContainer>
  );
};

export default RightSidebarMenu;
