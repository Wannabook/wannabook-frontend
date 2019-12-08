export interface PlainOldJsObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface EntityInitialState {
  loading: boolean;
  loaded: boolean;
  error?: string | PlainOldJsObject | null;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  picture: string;
}

export interface Organization {
  id: string;
  name: string;
  description: string;
}
