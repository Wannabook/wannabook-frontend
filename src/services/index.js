import FormValidator from './FormValidator';
import { ApiClient } from './ApiClient';
import { MockApiClient } from './MockApiClient';

export const formValidator = new FormValidator();

// we have to check bools from .env file as strings
export const apiClient =
  process.env.MOCK_CLIENT === 'true' ? new MockApiClient() : new ApiClient();
