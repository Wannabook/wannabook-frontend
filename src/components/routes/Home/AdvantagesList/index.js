import React from 'react';
import { Image } from 'semantic-ui-react';

import { Advantage, AdvantagesListContainer } from './styles';
import { StyledGrid } from 'ui-kit';
import advantageImage1 from './images/advantage1.svg';
import advantageImage2 from './images/advantage2.svg';
import advantageImage3 from './images/advantage3.svg';

const advantagesList = [
  {
    id: 1,
    description: 'Всегда под рукой',
    img: advantageImage1,
  },
  {
    id: 2,
    description: 'Бронирование online',
    img: advantageImage2,
  },
  {
    id: 3,
    description: 'Бонусы и скидки',
    img: advantageImage3,
  },
];

const AdvantagesList = () => {
  return (
    <AdvantagesListContainer>
      <StyledGrid stackable columns={3} centered>
        {advantagesList.map(item => (
          <StyledGrid.Column key={item.id}>
            <Advantage>
              <Image src={item.img} />
              <p>{item.description}</p>
            </Advantage>
          </StyledGrid.Column>
        ))}
      </StyledGrid>
    </AdvantagesListContainer>
  );
};

export default AdvantagesList;
