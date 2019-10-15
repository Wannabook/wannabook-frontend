import { omit, identity } from 'ramda';
import axios from 'axios';

const client = axios.create({
  baseURL: '/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

export class ApiClient {
  constructor(token) {
    this.headers = {};

    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    }
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
    const authMethod = localStorage.getItem('authMethod');
    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers, {
        'X-Auth-Method': authMethod,
      }),
      ...omit(['headers'], params),
    };

    const url = isAbsolute(endpoint)
      ? endpoint
      : `${process.env.API_URL}/${endpoint}`;

    return client(url, requestParams).then(identity);
  }
}

const isAbsolute = url => {
  return /^(?:[a-z]+:)?\/\//i.test(url);
};
