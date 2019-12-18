import { EntityInitialState, Profile } from 'types';

export interface SignUpInitialState extends EntityInitialState {
  profile: Profile;
  accessToken: string;
}

export interface SignUpRequestPayload {
  email: string;
  password: string;
  name: string;
  phone: string;
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
