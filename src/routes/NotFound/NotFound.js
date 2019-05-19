import React from 'react';
import { Link } from 'react-router-dom';
import { getPageUrl } from '../RouteResolver';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <p>This page does not exist</p>
        <p>
          <Link to={getPageUrl('HOME')}>Go to home page</Link>
        </p>
      </div>
    );
  }
}
