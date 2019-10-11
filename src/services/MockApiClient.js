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
    '/users/me': [
      {
        // we assume the token is always correct for now and returns this obj
        age: 0,
        _id: '5cc744d8cbb72b00179ce09f',
        name: 'ilya',
        email: 'kushliansky@gmail.com',
        createdAt: '2019-04-29T18:39:20.389Z',
        updatedAt: '2019-04-29T18:44:34.019Z',
        __v: 2,
        token: 'UG8Gqm64Rdc-3BuE6Eg3n2YimoZGWZsp-ht6fL9bAVc',
      },
    ],
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
              email: 'mail@mail.com',
              authToken: 'Bearer: wef0ih8gg9g3gn',
              expirationDate: '2020-01-01',
              userId: '5cc744d8cbb72b00179ce09f',
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
const json = {
  account_traffic: 39569131467,
  account_requests: 110196,
  story_traffic: 723934856512,
  story_requests: 1202764,
  stories: {
    3728: {
      title:
        'El nuevo empleado digital: cómo transformar la cultura de una empresa',
      traffic: 279770116,
      requests: 2248,
      records: [
        { date: '2019-09-10', traffic_count: 6654210, request_count: 54 },
        { date: '2019-09-11', traffic_count: 6735204, request_count: 58 },
        { date: '2019-09-12', traffic_count: 5202224, request_count: 40 },
        { date: '2019-09-14', traffic_count: 6538486, request_count: 52 },
        { date: '2019-09-13', traffic_count: 10393823, request_count: 77 },
        { date: '2019-09-15', traffic_count: 13962340, request_count: 102 },
        { date: '2019-09-16', traffic_count: 23637784, request_count: 176 },
        { date: '2019-09-17', traffic_count: 19306043, request_count: 144 },
        { date: '2019-09-18', traffic_count: 12650642, request_count: 98 },
        { date: '2019-09-19', traffic_count: 24014518, request_count: 192 },
        { date: '2019-09-20', traffic_count: 15673122, request_count: 123 },
        { date: '2019-09-21', traffic_count: 2512229, request_count: 21 },
        { date: '2019-09-22', traffic_count: 8046838, request_count: 62 },
        { date: '2019-09-23', traffic_count: 14154952, request_count: 138 },
        { date: '2019-09-24', traffic_count: 23876373, request_count: 190 },
        { date: '2019-09-25', traffic_count: 9478952, request_count: 75 },
        { date: '2019-09-26', traffic_count: 9808034, request_count: 82 },
        { date: '2019-09-27', traffic_count: 9525773, request_count: 91 },
        { date: '2019-09-29', traffic_count: 11409158, request_count: 97 },
        { date: '2019-09-30', traffic_count: 26079955, request_count: 214 },
        { date: '2019-10-01', traffic_count: 20109456, request_count: 162 },
      ],
    },
    3617: {
      title:
        'Cómo acertar para que el anillo de compromiso sea una joya eterna',
      traffic: 114611203,
      requests: 612,
      records: [
        { date: '2019-09-10', traffic_count: 8176455, request_count: 41 },
        { date: '2019-09-11', traffic_count: 10942875, request_count: 57 },
        { date: '2019-09-12', traffic_count: 2180736, request_count: 12 },
        { date: '2019-09-13', traffic_count: 5554200, request_count: 30 },
        { date: '2019-09-15', traffic_count: 1894711, request_count: 6 },
        { date: '2019-09-16', traffic_count: 13343921, request_count: 69 },
        { date: '2019-09-17', traffic_count: 6001568, request_count: 31 },
        { date: '2019-09-18', traffic_count: 5127995, request_count: 28 },
        { date: '2019-09-19', traffic_count: 2999115, request_count: 15 },
        { date: '2019-09-20', traffic_count: 2750022, request_count: 15 },
        { date: '2019-09-23', traffic_count: 6100405, request_count: 32 },
        { date: '2019-09-24', traffic_count: 3002312, request_count: 16 },
        { date: '2019-09-25', traffic_count: 3080052, request_count: 17 },
        { date: '2019-09-26', traffic_count: 8096725, request_count: 42 },
        { date: '2019-09-27', traffic_count: 1070033, request_count: 12 },
        { date: '2019-09-28', traffic_count: 9200827, request_count: 47 },
        { date: '2019-09-29', traffic_count: 6093241, request_count: 35 },
        { date: '2019-09-30', traffic_count: 11134017, request_count: 59 },
        { date: '2019-10-01', traffic_count: 7861993, request_count: 48 },
      ],
    },
    3629: {
      title: '¿Quién vela por nuestra seguridad digital?',
      traffic: 80567948,
      requests: 449,
      records: [
        { date: '2019-09-11', traffic_count: 3090704, request_count: 19 },
        { date: '2019-09-12', traffic_count: 3682250, request_count: 22 },
        { date: '2019-09-10', traffic_count: 1973273, request_count: 8 },
        { date: '2019-09-13', traffic_count: 11886596, request_count: 75 },
        { date: '2019-09-14', traffic_count: 2918908, request_count: 17 },
        { date: '2019-09-16', traffic_count: 4156279, request_count: 19 },
        { date: '2019-09-17', traffic_count: 1972936, request_count: 7 },
        { date: '2019-09-18', traffic_count: 9037597, request_count: 53 },
        { date: '2019-09-19', traffic_count: 5174767, request_count: 28 },
        { date: '2019-09-20', traffic_count: 6020925, request_count: 34 },
        { date: '2019-09-21', traffic_count: 3014444, request_count: 20 },
        { date: '2019-09-23', traffic_count: 4983345, request_count: 24 },
        { date: '2019-09-25', traffic_count: 3089845, request_count: 20 },
        { date: '2019-09-26', traffic_count: 5086400, request_count: 26 },
        { date: '2019-09-27', traffic_count: 1972929, request_count: 7 },
        { date: '2019-09-29', traffic_count: 3018176, request_count: 19 },
        { date: '2019-09-30', traffic_count: 6473009, request_count: 31 },
        { date: '2019-10-01', traffic_count: 3015565, request_count: 20 },
      ],
    },
    3717: {
      title: 'El nuevo empleado digital',
      traffic: 6409807,
      requests: 39,
      records: [
        { date: '2019-09-13', traffic_count: 821879, request_count: 4 },
        { date: '2019-09-17', traffic_count: 1648801, request_count: 10 },
        { date: '2019-09-19', traffic_count: 322396, request_count: 3 },
        { date: '2019-09-22', traffic_count: 168092, request_count: 2 },
        { date: '2019-09-24', traffic_count: 1723781, request_count: 10 },
        { date: '2019-09-27', traffic_count: 825111, request_count: 5 },
        { date: '2019-09-29', traffic_count: 899747, request_count: 5 },
      ],
    },
    3703: {
      title:
        'Más para no ser menos: el fútbol femenino cierra una temporada para la historia',
      traffic: 74894935,
      requests: 173,
      records: [
        { date: '2019-09-10', traffic_count: 8006987, request_count: 42 },
        { date: '2019-09-16', traffic_count: 50831063, request_count: 31 },
        { date: '2019-09-20', traffic_count: 537028, request_count: 6 },
        { date: '2019-09-21', traffic_count: 3166428, request_count: 19 },
        { date: '2019-09-23', traffic_count: 7337309, request_count: 44 },
        { date: '2019-09-30', traffic_count: 5016120, request_count: 31 },
      ],
    },
    3710: {
      title: 'Los jóvenes se suben al ‘gran escenario de la vida’',
      traffic: 12405415207,
      requests: 36685,
      records: [
        { date: '2019-09-10', traffic_count: 994258378, request_count: 2951 },
        { date: '2019-09-12', traffic_count: 686015100, request_count: 2452 },
        { date: '2019-09-11', traffic_count: 1302106850, request_count: 3563 },
        { date: '2019-09-13', traffic_count: 591402635, request_count: 1659 },
        { date: '2019-09-15', traffic_count: 876535670, request_count: 3013 },
        { date: '2019-09-14', traffic_count: 547297916, request_count: 1806 },
        { date: '2019-09-16', traffic_count: 840512460, request_count: 2095 },
        { date: '2019-09-17', traffic_count: 507712776, request_count: 1432 },
        { date: '2019-09-18', traffic_count: 652171944, request_count: 2190 },
        { date: '2019-09-19', traffic_count: 493637429, request_count: 1431 },
        { date: '2019-09-20', traffic_count: 764447345, request_count: 2351 },
        { date: '2019-09-21', traffic_count: 920228880, request_count: 2608 },
        { date: '2019-09-22', traffic_count: 907909130, request_count: 2169 },
        { date: '2019-09-23', traffic_count: 413232203, request_count: 1831 },
        { date: '2019-09-24', traffic_count: 1021294104, request_count: 2664 },
        { date: '2019-09-25', traffic_count: 270900844, request_count: 1103 },
        { date: '2019-09-26', traffic_count: 605137147, request_count: 1309 },
        { date: '2019-09-30', traffic_count: 10004798, request_count: 49 },
        { date: '2019-10-01', traffic_count: 609598, request_count: 9 },
      ],
    },
    3780: {
      title: 'Guía para digitalizar (y reinventar) cualquier espacio físico',
      traffic: 110925159,
      requests: 875,
      records: [
        { date: '2019-09-12', traffic_count: 6658469, request_count: 55 },
        { date: '2019-09-11', traffic_count: 19624457, request_count: 153 },
        { date: '2019-09-14', traffic_count: 4268187, request_count: 37 },
        { date: '2019-09-10', traffic_count: 5006828, request_count: 36 },
        { date: '2019-09-13', traffic_count: 3748070, request_count: 28 },
        { date: '2019-09-15', traffic_count: 4110712, request_count: 29 },
        { date: '2019-09-16', traffic_count: 9526260, request_count: 60 },
        { date: '2019-09-17', traffic_count: 3666494, request_count: 27 },
        { date: '2019-09-18', traffic_count: 3059097, request_count: 31 },
        { date: '2019-09-19', traffic_count: 4732965, request_count: 34 },
        { date: '2019-09-20', traffic_count: 4189328, request_count: 30 },
        { date: '2019-09-21', traffic_count: 565912, request_count: 3 },
        { date: '2019-09-22', traffic_count: 4546735, request_count: 36 },
        { date: '2019-09-23', traffic_count: 6753406, request_count: 73 },
        { date: '2019-09-24', traffic_count: 8214909, request_count: 66 },
        { date: '2019-09-25', traffic_count: 9558538, request_count: 73 },
        { date: '2019-09-26', traffic_count: 5463160, request_count: 47 },
        { date: '2019-09-30', traffic_count: 6335007, request_count: 51 },
        { date: '2019-10-01', traffic_count: 896625, request_count: 6 },
      ],
    },
    3779: {
      title: 'volkswagen',
      traffic: 299201833,
      requests: 1011,
      records: [
        { date: '2019-09-10', traffic_count: 6174995, request_count: 38 },
        { date: '2019-09-11', traffic_count: 12026552, request_count: 29 },
        { date: '2019-09-14', traffic_count: 5189103, request_count: 38 },
        { date: '2019-09-12', traffic_count: 38757573, request_count: 151 },
        { date: '2019-09-13', traffic_count: 13025872, request_count: 87 },
        { date: '2019-09-15', traffic_count: 5926779, request_count: 19 },
        { date: '2019-09-16', traffic_count: 8834617, request_count: 24 },
        { date: '2019-09-17', traffic_count: 28869300, request_count: 46 },
        { date: '2019-09-19', traffic_count: 1551946, request_count: 14 },
        { date: '2019-09-20', traffic_count: 24553673, request_count: 76 },
        { date: '2019-09-21', traffic_count: 13705659, request_count: 89 },
        { date: '2019-09-22', traffic_count: 45908, request_count: 1 },
        { date: '2019-09-23', traffic_count: 11681259, request_count: 80 },
        { date: '2019-09-24', traffic_count: 17277261, request_count: 14 },
        { date: '2019-09-25', traffic_count: 3354048, request_count: 24 },
        { date: '2019-09-27', traffic_count: 68925786, request_count: 115 },
        { date: '2019-09-29', traffic_count: 2886342, request_count: 20 },
        { date: '2019-09-30', traffic_count: 8152749, request_count: 16 },
        { date: '2019-10-01', traffic_count: 28262411, request_count: 130 },
      ],
    },
    3902: {
      title:
        '\u003cp\u003e\u003cspan style="color:hsl(0,0%,100%);"\u003eLa investigación española, clave para liberar de plásticos nuestros mares\u003c/span\u003e\u003c/p\u003e',
      traffic: 627432974665,
      requests: 489364,
      records: [
        { date: '2019-09-26', traffic_count: 425971724, request_count: 386 },
        { date: '2019-09-27', traffic_count: 850218007, request_count: 785 },
        { date: '2019-09-28', traffic_count: 40914588, request_count: 44 },
        {
          date: '2019-09-30',
          traffic_count: 552693398021,
          request_count: 427796,
        },
        {
          date: '2019-10-01',
          traffic_count: 73422472325,
          request_count: 60353,
        },
      ],
    },
    3920: {
      title: 'GEOGESTIÓN: Localizar tus activos para mejorar tu servicio',
      traffic: 83130085639,
      requests: 671308,
      records: [
        { date: '2019-09-26', traffic_count: 4638349, request_count: 49 },
        { date: '2019-09-27', traffic_count: 23854044, request_count: 208 },
        {
          date: '2019-09-30',
          traffic_count: 82082334855,
          request_count: 662945,
        },
        { date: '2019-10-01', traffic_count: 1019258391, request_count: 8106 },
      ],
    },
  },
  account_records: [
    { date: '2019-09-10', traffic_count: 70132987, request_count: 199 },
    { date: '2019-09-12', traffic_count: 27729708, request_count: 165 },
    { date: '2019-09-13', traffic_count: 19450368, request_count: 104 },
    { date: '2019-09-11', traffic_count: 48567779, request_count: 249 },
    { date: '2019-09-14', traffic_count: 10890824, request_count: 62 },
    { date: '2019-09-15', traffic_count: 33714608, request_count: 186 },
    { date: '2019-09-16', traffic_count: 49275578, request_count: 340 },
    { date: '2019-09-17', traffic_count: 40590496, request_count: 272 },
    { date: '2019-09-18', traffic_count: 26067032, request_count: 210 },
    { date: '2019-09-19', traffic_count: 34421518, request_count: 243 },
    { date: '2019-09-20', traffic_count: 274079529, request_count: 806 },
    { date: '2019-09-21', traffic_count: 21722019, request_count: 115 },
    { date: '2019-09-22', traffic_count: 59358812, request_count: 98 },
    { date: '2019-09-23', traffic_count: 368834055, request_count: 1600 },
    { date: '2019-09-24', traffic_count: 177190526, request_count: 2192 },
    { date: '2019-09-25', traffic_count: 1894705029, request_count: 1989 },
    { date: '2019-09-26', traffic_count: 1555467418, request_count: 3290 },
    { date: '2019-09-27', traffic_count: 518175368, request_count: 583 },
    { date: '2019-09-28', traffic_count: 13665593, request_count: 50 },
    { date: '2019-09-29', traffic_count: 16000500, request_count: 71 },
    { date: '2019-09-30', traffic_count: 30962033019, request_count: 88478 },
    { date: '2019-10-01', traffic_count: 3347058701, request_count: 8894 },
  ],
};
