export interface PlainOldJsObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Common Application Store
 */
export interface Store {
  auth: {
    user: EntityInitialState;
    signIn: EntityInitialState;
    signUp: EntityInitialState;
    changePassword: EntityInitialState;
    forgotPassword: EntityInitialState;
    updateUserInfo: EntityInitialState;
  };
  organizations: EntityInitialState;
}

export interface EntityInitialState {
  loading: boolean;
  loaded: boolean;
  error?: string | PlainOldJsObject | null;
  records?: PlainOldJsObject[] | null;
}

export interface EntityLoadSuccessPayload {
  payload?: PlainOldJsObject[];
}

export interface EntityLoadFailurePayload {
  payload?: string | object | null;
}

/**
 * API Client
 */
export interface ApiClient {
  headers?: PlainOldJsObject;
  get(string, headers?: PlainOldJsObject);
  put(string, headers?: PlainOldJsObject);
  post(string, headers?: PlainOldJsObject);
  patch(string, headers?: PlainOldJsObject);
  delete(string, headers?: PlainOldJsObject);
}

export interface ApiClientReqParams {
  headers?: PlainOldJsObject;
}

/**
 * Entities
 */
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
