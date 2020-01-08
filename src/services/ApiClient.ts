import { omit, identity } from 'ramda';
import axios, { AxiosError } from 'axios';

import { ACCESS_TOKEN, AUTH_METHOD, ID_TOKEN, AUTH_METHODS } from 'consts';
import { ApiClientReqParams, PlainOldJsObject } from 'types';

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

interface RequestParams {
  method: string;
  headers?: PlainOldJsObject;
  params?: PlainOldJsObject;
}

class ApiClient {
  private headers: PlainOldJsObject;

  constructor() {
    this.headers = {};
  }

  get(endpoint: string, params: ApiClientReqParams = {}) {
    const requestParams = buildRequestParams('GET', params);

    return this.request(endpoint, requestParams);
  }

  put(endpoint: string, params: ApiClientReqParams = {}) {
    const requestParams = buildRequestParams('PUT', params);

    return this.request(endpoint, requestParams);
  }

  post(endpoint: string, params: ApiClientReqParams = {}) {
    const requestParams = buildRequestParams('POST', params);

    return this.request(endpoint, requestParams);
  }

  patch(endpoint: string, params: ApiClientReqParams = {}) {
    const requestParams = buildRequestParams('PATCH', params);

    return this.request(endpoint, requestParams);
  }

  delete(endpoint: string, params: ApiClientReqParams = {}) {
    const requestParams = buildRequestParams('DELETE', params);

    return this.request(endpoint, requestParams);
  }

  private request(endpoint: string, params: ApiClientReqParams = {}) {
    // if we initialize Client with these values then we'll not be able to
    // detect change to these values during app lifetime,
    // so we get "fresh" values before each request is made
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const idToken = localStorage.getItem(ID_TOKEN);
    const authMethod = localStorage.getItem(AUTH_METHOD);

    const requestParams = {
      headers: Object.assign({}, this.headers, params.headers, {
        Authorization: `Bearer ${accessToken}`,
        'X-Auth-Method': authMethod || params.headers?.['X-Auth-Method'],
        'X-Id-Token': idToken,
      }),
      ...omit(['headers'], params),
    };

    const url = isAbsolute(endpoint)
      ? endpoint
      : `${process.env.API_URL}/api/v${Number(API_VERSION)}/${endpoint}`;

    return client(url, requestParams)
      .then(identity)
      .catch((error: AxiosError) => {
        if (error?.response?.status === 401) {
          unauthorized();
        }

        return error?.response?.data;
      });
  }
}

const isAbsolute = (url: string) => /^(?:[a-z]+:)?\/\//i.test(url);

export const formValidator = new FormValidator();

// we have to check bools from .env file as strings
export const apiClient =
  process.env.MOCK_CLIENT === 'true' ? new MockApiClient() : new ApiClient();

const buildRequestParams = (method: string, params: PlainOldJsObject) => {
  const requestParams: RequestParams = {
    method,
    ...omit(['headers'], params),
  };

  if (params.headers) {
    requestParams.headers = { ...requestParams.headers, ...params.headers };
  }

  return requestParams;
};
