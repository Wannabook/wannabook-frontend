import React from 'react';
import Slider from 'react-slick';

import { SliderArrow } from 'ui-kit';

import { SliderWrapper, Slide, Illustration, Description } from './styles';

interface SliderItem {
  id: number;
  description: string;
  img: string;
}

const sliderItems: Array<SliderItem> = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 1',
    img: '',
    id: 1,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 2',
    img: '',
    id: 2,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 3',
    img: '',
    id: 3,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 4',
    img: '',
    id: 4,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 5',
    img: '',
    id: 5,
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

export const MainSlider = () => {
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
