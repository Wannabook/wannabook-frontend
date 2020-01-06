import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { ACCESS_TOKEN, AUTH_METHOD, ID_TOKEN } from 'consts';

const TokenGrabber: React.FC<RouteComponentProps> = ({ history }) => {
  React.useEffect(() => {
    const accessToken = getUrlParameter('access_token');
    const authMethod = getUrlParameter('auth_method');
    const idToken = getUrlParameter('id_token');

    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
    }

    if (authMethod) {
      localStorage.setItem(AUTH_METHOD, authMethod);
    }

    if (idToken) {
      localStorage.setItem(ID_TOKEN, idToken);
    }

    history.push('/');
  }, [history]);

  // TODO: Render loader here?
  // we return a fragment instead of string for the sake of correct typing
  return <>'Выполняем вход в систему...'</>;
};

function getUrlParameter(name: string) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);

  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default withRouter(TokenGrabber);
