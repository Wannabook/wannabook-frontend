import FormValidator from './FormValidator';
import { ApiClient } from './ApiClient';
import { MockApiClient } from './MockApiClient';
import { ACCESS_TOKEN } from '../constants';

export const formValidator = new FormValidator();

const token = localStorage.getItem(ACCESS_TOKEN);

export const apiClient = Boolean(process.env.MOCK_CLIENT)
  ? new MockApiClient()
  : new ApiClient(token);
