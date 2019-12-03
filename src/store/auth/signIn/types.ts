import { EntityInitialState, Profile } from '../../../types';

export interface SignInInitialState extends EntityInitialState {
  profile: Profile;
  accessToken: string;
}

/**
 * Action payload (temp)
 */
export interface SignInSuccessPayload {
  message?: string;
  data?: {
    token: string;
    user: Profile;
  };
}

export interface SignInFailurePayload {
  message: string;
}

export interface SingInRequestPayload {
  email: string;
  password: string;
}
