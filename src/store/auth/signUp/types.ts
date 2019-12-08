import { EntityInitialState, Profile } from 'types';

export interface SignUpInitialState extends EntityInitialState {
  profile: Profile;
  accessToken: string;
}

export interface SingUpRequestPayload {
  email: string;
  password: string;
}

export interface SignUpSuccessPayload {
  message?: string;
  data?: {
    token: string;
    user: Profile;
  };
}

export interface SignUpFailurePayload {
  message: string;
}
