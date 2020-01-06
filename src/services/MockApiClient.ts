// we don't care about types here. We don't waste time on a mock client

export class MockApiClient {
  userResponse = {
    user: {
      name: 'ilya',
      email: 'kushliansky@gmail.com',
      phone: '375295565656',
      avatar:
        'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5a81fc730e6608334b45e809/bf0b3a3c-4ccc-49a9-8a72-8271b6caea4b/128?size=48&amp;s=48&',
    },
    authToken: 'Bearer: wef0ih8gg9g3gn',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = {
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

  get(resourceUrl: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve(this.data[resourceUrl])
          : reject('Something went wrong...');
      }, 300);
    });
  }

  post(resourceUrl: string, { body = {} }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1
          ? resolve(this.userResponse)
          : reject('Something went wrong...');
      }, 1500);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put(resourceUrl: string, data: { [key: string]: any }) {
    const { body: user } = data;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1 ? resolve(user) : reject('Something went wrong...');
      }, 1500);
    });
  }
}
