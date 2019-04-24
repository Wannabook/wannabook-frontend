export class ApiClient {
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
    '/users': [
      {
        id: 1,
        name: 'Dmitri',
      },
      {
        id: 2,
        name: 'Ilya',
      },
      {
        id: 3,
        name: 'Artur',
      },
    ],
  };

  get(resourceUrl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.2
          ? resolve(this.data[resourceUrl])
          : reject('Something went wrong...');
      }, 3000);
    });
  }
}
