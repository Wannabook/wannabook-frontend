import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import CategoryList from '../../components/CategoryList';

const categoryList = [
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
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 5,
  },
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 6,
  },
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 7,
  },
  {
    title: 'Category',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 8,
  },
];

export default class Categories extends React.Component {
  render() {
    return (
      <Grid stackable columns="1">
        <Grid.Row stretched columns="1">
          <Grid.Column>
            <Segment>
              <CategoryList categoryList={categoryList} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
