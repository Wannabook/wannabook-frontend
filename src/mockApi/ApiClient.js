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
    '/user/me': {
      // we assume the token is always correct for now and returns this obj
      user: {
        age: 0,
        _id: '5cc744d8cbb72b00179ce09f',
        name: 'ilya',
        email: 'kushliansky@gmail.com',
        createdAt: '2019-04-29T18:39:20.389Z',
        updatedAt: '2019-04-29T18:44:34.019Z',
        __v: 2,
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M3NDRkOGNiYjcyYjAwMTc5Y2UwOWYiLCJpYXQiOjE1NTY1NjM0NzR9.UG8Gqm64Rdc-3BuE6Eg3n2YimoZGWZsp-ht6fL9bAVc',
    },
  };

  get(resourceUrl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5
          ? resolve(this.data[resourceUrl])
          : reject('Something went wrong...');
      }, 300);
    });
  }
}
