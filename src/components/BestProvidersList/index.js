import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { getPageUrl } from '../../routes/RouteResolver';
import { ImgContainer } from './styles';

const BestProvidersList = ({ bestProvidersList }) => {
  return (
    <>
      <h2>Выбирайте лучшее!</h2>
      <Grid stackable columns={2} centered>
        {bestProvidersList.map(item => (
          <Grid.Column key={item.id}>
            <Link to={getPageUrl('SERVICE')}>
              <ImgContainer>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <h2>{`${item.title} #${item.id}`}</h2>
                <p>{item.description}</p>
              </ImgContainer>
            </Link>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

BestProvidersList.defaultProps = {
  bestProvidersList: [
    {
      title: 'Title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      id: 1,
    },
    {
      title: 'Title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      id: 2,
    },
    {
      title: 'Title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      id: 3,
    },
  ],
};

export default BestProvidersList;
