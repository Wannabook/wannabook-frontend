import { apiRequest } from '../mockApi';

export default function apiClientMiddleware({ getState }) {
  return next => action => {
    const { meta, metas, types, ...rest } = action;

    const [REQUEST, SUCCESS, FAILURE] = types;
    const [requestMeta, successMeta, failureMeta] = metas || [];
    let resolved = false;

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

      return reject(error);
    };
    const request = apiRequest()
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
