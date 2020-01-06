import { Profile, PlainOldJsObject } from 'types';

export interface LoadUserSuccessPayload {
  user: Profile;
  accessToken: string;
  message?: string;
}

export interface LoadUserFailurePayload {
  error: PlainOldJsObject;
}
