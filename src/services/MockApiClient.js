export default class MockApiClient {
  data = {
    '/organizations': [
      {
        id: 1,
        name: 'Google',
        description: 'Google description',
      },
      {
        id: 2,
        name: 'Facebook',
        description: 'Facebook description',
      },
    ],
    '/users/me': {
      user: {
        name: 'ilya',
        email: 'kushliansky@gmail.com',
      },
      authToken: 'Bearer: wef0ih8gg9g3gn',
    },
  };

  get(resourceUrl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve(this.data[resourceUrl])
          : reject('Something went wrong...');
      }, 300);
    });
  }

  post(resourceUrl, { body = {} }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1
          ? resolve({
              user: {
                name: 'ilya',
                email: 'kushliansky@gmail.com',
              },
              authToken: 'Bearer: wef0ih8gg9g3gn',
            })
          : reject('Something went wrong...');
      }, 1500);
    });
  }

  put(resourceUrl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve() : reject('Something went wrong...');
      }, 1500);
    });
  }
}
