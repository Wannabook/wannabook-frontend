import { API_ENDPOINTS as API } from '../constants';

export class ApiClient {
  constructor(token) {
    this.headers = { 'content-type': 'application/json' };

    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  me() {
    return this.request(API.me);
  }

  get(endpoint, params = {}) {
    return this.request(endpoint, params);
  }

  request(endpoint, params = {}) {
    const requestParams = {
      headers: this.headers,
      ...params,
    };

    console.warn('requestParams', requestParams);

    const url = isAbsolute(endpoint)
      ? endpoint
      : `${process.env.API_URL}/${endpoint}`;

    return fetch(url, requestParams).then(r => r.json());
  }
}

const isAbsolute = url => {
  return /^(?:[a-z]+:)?\/\//i.test(url);
};
