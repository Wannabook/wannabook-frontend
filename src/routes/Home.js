import React from 'react';
import styled from 'styled-components';

import MainSlider from '../components/MainSlider';
import Input from '../ui-kit/components/Input';
import Button from '../ui-kit/components/Button';

import '../styles/test-style.scss';

export default class Home extends React.Component {
  render() {
    const Form = styled.form`
      padding: 0 50px;
    `;

    const Label = styled.label`
      display: block;
      margin-bottom: 10px;
    `;

    const StyledInput = styled(Input)`
      width: 100%;
    `;

    return (
      <div className="scss-test">
        <MainSlider />
        <Form>
          <Label>
            <StyledInput error />
          </Label>
          <Label>
            <StyledInput
              loading
              icon="user"
              iconPosition="left"
              placeholder="Search..."
            />
          </Label>
          <Button size="large" primary>
            Click here
          </Button>
        </Form>
      </div>
    );
  }
}
