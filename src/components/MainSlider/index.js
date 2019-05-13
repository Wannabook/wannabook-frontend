import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import SliderArrow from '../../ui-kit/components/SliderArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  padding: 30px;
`;

const Slide = styled.div`
  border: solid 1px grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Illustration = styled.img`
  border: solid 1px black;
  margin: 16px;
  height: 120px;
  flex-grow: 1;
`;

const Description = styled.p`
  flex-grow: 2;
`;
const sliderItems = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 1',
    img: '',
    id: '1',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 2',
    img: '',
    id: '2',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 3',
    img: '',
    id: '3',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 4',
    img: '',
    id: '4',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 5',
    img: '',
    id: '5',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SliderArrow name="arrow left" direction="left" />,
  nextArrow: <SliderArrow name="arrow right" direction="right" />,
};

const MainSlider = props => {
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {sliderItems.map(item => (
          <div key={item.id}>
            <Slide>
              <Illustration src={item.img} alt="Illustration" />
              <Description>{item.description}</Description>
            </Slide>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default MainSlider;
