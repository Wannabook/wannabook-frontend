import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { getPageUrl } from 'routes/RouteResolver';

import { StyledGrid, StyledColumn } from 'ui-kit';

import { ImgContainer } from './styles';

interface Provider {
  id: number;
  title: string;
  description: string;
}
const bestProvidersList: Array<Provider> = [
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
];

export const BestProvidersList = () => {
  return (
    <>
      <h2>Выбирайте лучшее!</h2>
      <StyledGrid stackable columns={2} centered>
        {bestProvidersList.map(item => (
          <StyledColumn key={item.id}>
            <Link to={getPageUrl('SERVICE')}>
              <ImgContainer>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <h2>{`${item.title} #${item.id}`}</h2>
                <p>{item.description}</p>
              </ImgContainer>
            </Link>
          </StyledColumn>
        ))}
      </StyledGrid>
    </>
  );
};
