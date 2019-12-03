export interface EntityInitialState {
  loading: boolean;
  loaded: boolean;
  error?: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  picture: string;
}
