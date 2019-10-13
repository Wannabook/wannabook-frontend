import styled from 'styled-components';
import Button from '../../ui-kit/components/Button';

export const RegistrationContainer = styled.div`
  padding: 50px 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  font-family: inherit;
  line-height: 27px;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Illustration = styled.img`
  display: block;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
`;

export const SignInButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const SignUpButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
  }
`;
