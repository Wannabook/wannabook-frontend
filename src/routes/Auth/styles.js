import styled from 'styled-components';
import Button from '../../ui-kit/components/Button';

export const Container = styled.div`
  margin: 16px;
`;

export const Description = styled.div`
  text-align: center;
  margin: 0px 36px 36px;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;

export const Illustration = styled.img`
  border: solid 1px black;
  margin: 16px;
  display: inline-block;
  width: 110px; //temporary solution
  height: 120px;
`;

export const SignInButton = styled(Button)`
  &&& {
    display: block; //probably need additional type of button with display:block
    border-radius: 0;
    margin: 16px 0;
    width: 100%;
  }
`;
