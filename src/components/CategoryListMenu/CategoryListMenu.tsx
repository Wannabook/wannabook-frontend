import React from 'react';

import { VerticalMenu } from '../common/Menu';

import { CategoryMenuItem } from './types';
import { CategoryListMenuContainer } from './styles';

const menuItemsList: Array<CategoryMenuItem> = [
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

export const CategoryListMenu = () => {
  return (
    <CategoryListMenuContainer>
      <VerticalMenu menuItemsList={menuItemsList} />
    </CategoryListMenuContainer>
  );
};
