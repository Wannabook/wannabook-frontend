import { ApiClient } from './apiClient';
import { ACCESS_TOKEN } from '../constants';

const token = localStorage.getItem(ACCESS_TOKEN);

export const apiClient = new ApiClient(token);
