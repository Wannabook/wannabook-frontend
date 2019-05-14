import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderWrapper = styled.div`
  padding: 30px;
`;

export const Slide = styled.div`
  border: solid 1px grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Illustration = styled.img`
  border: solid 1px black;
  margin: 16px;
  height: 120px;
  flex-grow: 1;
  flex-basis: 33%;
`;

export const Description = styled.p`
  flex-grow: 2;
  flex-basis: 66%;
`;
