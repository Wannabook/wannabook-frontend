import FormValidator from './FormValidator';
import { ApiClient } from './apiClient';
import { ACCESS_TOKEN } from '../constants';

export const formValidator = new FormValidator();

const token = localStorage.getItem(ACCESS_TOKEN);

// Use real one
export const apiClient = new ApiClient(token);
