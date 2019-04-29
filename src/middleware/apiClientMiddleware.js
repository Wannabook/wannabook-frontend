import { ApiClient } from '../mockApi';

export default function apiClientMiddleware({ getState }) {
  return next => action => {
    const { apiRequest, meta, metas, types, ...rest } = action;
    if (!apiRequest) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    const [requestMeta, successMeta, failureMeta] = metas || [];
    let resolved = false;

    const client = new ApiClient();

    const handleSuccess = response => {
      if (resolved) {
        return null;
      }
      resolved = true;

      next({
        ...rest,
        type: SUCCESS,
        meta: {
          ...meta,
          ...successMeta,
        },
        payload: response,
      });

      return response;
    };

    const handleFailure = error => {
      if (resolved) {
        return null;
      }
      resolved = true;

      next({
        ...rest,
        type: FAILURE,
        error: true,
        meta: {
          ...meta,
          ...failureMeta,
        },
        payload: error,
      });
    };

    const request = apiRequest(client)
      .then(handleSuccess)
      .catch(handleFailure);

    next({
      ...rest,
      type: REQUEST,
      meta: {
        ...meta,
        ...requestMeta,
      },
      payload: request,
    });

    return request;
  };
}
