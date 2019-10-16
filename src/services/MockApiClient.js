export class MockApiClient {
  userResponse = {
    user: {
      name: 'ilya',
      email: 'kushliansky@gmail.com',
      phone: '375295565656',
    },
    authToken: 'Bearer: wef0ih8gg9g3gn',
  };
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
    '/users/me': this.userResponse,
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
          ? resolve(this.userResponse)
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
