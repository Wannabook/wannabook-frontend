import { omit, identity } from 'ramda';
import axios from 'axios';

import { ACCESS_TOKEN, AUTH_METHOD, ID_TOKEN, AUTH_METHODS } from 'consts';

import { unauthorized } from './authService';
import FormValidator from './FormValidator';
import { MockApiClient } from './MockApiClient';

const API_VERSION = process.env.API_VERSION;

if (!API_VERSION) {
  throw new Error('Api version is not found in your .env file');
}

const client = axios.create({
  baseURL: `/api/v${Number(API_VERSION)}`,
  headers: { 'Content-Type': 'application/json' },
});

class ApiClient {
  constructor() {
    this.headers = {};
  }

  // TODO: reduce duplication in client methods
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

  // TODO: add patch method!
  // patch(endpoint, params = {})

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
        'X-Auth-Method': authMethod || params.headers['X-Auth-Method'],
        'X-Id-Token': idToken,
      }),
      ...omit(['headers'], params),
    };
    console.log('requestParams', requestParams);

    const url = isAbsolute(endpoint)
      ? endpoint
      : `${process.env.API_URL}/api/v${Number(API_VERSION)}/${endpoint}`;

    return client(url, requestParams)
      .then(identity)
      .catch(error => {
        if (error?.response?.status === 401) {
          unauthorized();
        }

        return error?.response?.data;
      });
  }
}

const isAbsolute = url => /^(?:[a-z]+:)?\/\//i.test(url);

export const formValidator = new FormValidator();

// we have to check bools from .env file as strings
export const apiClient =
  process.env.MOCK_CLIENT === 'true' ? new MockApiClient() : new ApiClient();
