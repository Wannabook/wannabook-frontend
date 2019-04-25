import React from 'react';

import OrganizationsList from '../components/OrganizationsList';
import Input from '../ui-kit/components/Input';
import Button from '../ui-kit/components/Button';

import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 0 50px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <OrganizationsList />
      <StyledForm>
        <StyledLabel>
          <StyledInput error />
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            loading
            icon="user"
            iconPosition="left"
            placeholder="Search..."
          />
        </StyledLabel>
        <Button size="large" primary>
          Click here
        </Button>
      </StyledForm>
    </>
  );
};

export default Home;
