
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          account_id: '1',
          info_id: '1',
          role_id: '1',
          username: 'student1',
          password: 'password'
        },
        {
          account_id: '2',
          info_id: '2',
          role_id: '1',
          username: 'student2',
          password: 'password'
        },
        {
          account_id: '3',
          info_id: '3',
          role_id: '1',
          username: 'student3',
          password: 'password'
        },
        {
          account_id: '4',
          info_id: '4',
          role_id: '2',
          username: 'instructor1',
          password: 'password'
        },
        {
          account_id: '5',
          info_id: '5',
          role_id: '2',
          username: 'instructor2',
          password: 'password'
        },
        {
          account_id: '6',
          info_id: '6',
          role_id: '2',
          username: 'instructor3',
          password: 'password'
        },
        {
          account_id: '7',
          info_id: '1',
          role_id: '3',
          username: 'admin',
          password: 'password'
        },
      ]);
    });
};
