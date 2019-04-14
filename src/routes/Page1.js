import React from 'react';

import OrganizationsList from '../components/OrganizationsList';

import './style.scss';

export default class Page1 extends React.Component {
  handleClick = () => {
    console.log('Ilya');
  };

  render() {
    return (
      <div>
        <OrganizationsList />
        <div className="scss-test">
          <p className="scss-test scss-test--modifier">
            Here is page 1 and it should be yellow
          </p>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}
