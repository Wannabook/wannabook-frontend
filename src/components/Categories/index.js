import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';

const CategoryList = ({ categoryList }) => {
  return (
    <Grid>
      {categoryList.map(item => (
        <Grid.Column key={item.id} mobile={8} tablet={4} computer={4}>
          <Segment>
            <h2>{`${item.title} #${item.id}`}</h2>
            <p>{item.description}</p>
          </Segment>
        </Grid.Column>
      ))}
    </Grid>
  );
};

CategoryList.PropTypes = {
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

CategoryList.defaultProps = {
  categoryList: [
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
  ],
};

export default CategoryList;
