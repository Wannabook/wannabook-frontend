import { omit } from 'ramda';

export class ApiClient {
  constructor(token) {
    this.headers = {};
    this.headers['Content-Type'] = 'application/json';
    console.warn('this.headers', this.headers);

    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  request(endpoint, params = {}) {
    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers),
      ...omit(['headers'], params),
    };

    const url = isAbsolute(endpoint)
      ? endpoint
      : `${process.env.API_URL}/${endpoint}`;

    return fetch(url, requestParams).then(r => r.json());
  }
}

const isAbsolute = url => {
  return /^(?:[a-z]+:)?\/\//i.test(url);
};
