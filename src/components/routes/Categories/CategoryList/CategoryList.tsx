import React from 'react';
import { Segment } from 'semantic-ui-react';
import { StyledGrid, StyledColumn } from 'ui-kit';

interface Category {
  id: number;
  description: string;
  title: string;
}
const categoryList: Array<Category> = [
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 4,
  },
];

interface CategoryListProps {
  categoryList: Array<Category>;
}

export const CategoryList: React.FC<CategoryListProps> = () => {
  return (
    <StyledGrid>
      {categoryList.map(item => (
        <StyledColumn key={item.id} mobile={8} tablet={4} computer={4}>
          <Segment>
            <h2>{`${item.title} #${item.id}`}</h2>
            <p>{item.description}</p>
          </Segment>
        </StyledColumn>
      ))}
    </StyledGrid>
  );
};
