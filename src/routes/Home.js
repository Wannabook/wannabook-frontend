import React from 'react';
import '../styles/test-style.scss';

export default class Home extends React.Component {
  handleClick = () => {
    console.log('Ilya');
  };

  render() {
    return (
      <div className="scss-test">
        <p className="scss-test scss-test--modifier">Here is home page!</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
