import { ApiClient } from './apiClient';
import { ACCESS_TOKEN, JWT_TOKEN } from '../constants';

const token =
  localStorage.getItem(JWT_TOKEN) || localStorage.getItem(ACCESS_TOKEN);

export const apiClient = new ApiClient(token);
