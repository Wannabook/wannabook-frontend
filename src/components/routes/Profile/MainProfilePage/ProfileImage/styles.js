import styled from 'styled-components';
import { white } from '../../../../../ui-kit/theme';
import selectImageIcon from './images/select_image.svg';

export const ProfileImageContainer = styled.div`
  margin-bottom: 40px;
`;

export const Avatar = styled.div`
  width: 115px;
  height: 115px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${white};
  background-image: url(${props =>
    props.avatar ? props.avatar : selectImageIcon});
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
