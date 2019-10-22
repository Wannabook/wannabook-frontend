import { omit, identity } from 'ramda';
import axios from 'axios';

import { ACCESS_TOKEN, AUTH_METHOD, ID_TOKEN } from '../constants';

const client = axios.create({
  baseURL: `/api/v${Number(process.env.API_VERSION) || 1}`,
  headers: { 'Content-Type': 'application/json' },
});

export class ApiClient {
  constructor() {
    this.headers = {};
  }

  get(endpoint, params = {}) {
    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers),
      ...omit(['headers'], params),
    };

    return this.request(endpoint, requestParams);
  }

  put(endpoint, params = {}) {
    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers),
      method: 'PUT',
      ...omit(['headers'], params),
    };

    return this.request(endpoint, requestParams);
  }

  post(endpoint, params = {}) {
    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers),
      method: 'POST',
      ...omit(['headers'], params),
    };

    return this.request(endpoint, requestParams);
  }

  delete(endpoint, params = {}) {
    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers),
      method: 'DELETE',
      ...omit(['headers'], params),
    };

    return this.request(endpoint, requestParams);
  }

  request(endpoint, params = {}) {
    // if we initialize Client with these values then we'll not be able to
    // detect change to these values during app lifetime,
    // so we get "fresh" values before each request is made
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const idToken = localStorage.getItem(ID_TOKEN);
    const authMethod = localStorage.getItem(AUTH_METHOD);

    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers, {
        Authorization: `Bearer ${accessToken}`,
        'X-Auth-Method': authMethod,
        'X-Id-Token': idToken,
      }),
      ...omit(['headers'], params),
    };

    const url = isAbsolute(endpoint)
      ? endpoint
      : `${process.env.API_URL}/${endpoint}`;

    return client(url, requestParams).then(identity);
  }
}

const isAbsolute = url => /^(?:[a-z]+:)?\/\//i.test(url);
