
const { hashPassword } = require("../../Auth/authentication/hashing")

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  const password = await hashPassword('password')

  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          account_id: '1',
          info_id: '1',
          role_id: '1',
          username: 'admin',
          password: password
        },
        {
          account_id: '2',
          info_id: '4',
          role_id: '2',
          username: 'instructor',
          password: password
        },
        {
          account_id: '3',
          info_id: '3',
          role_id: '3',
          username: 'student',
          password: password
        }
      ]);
    });
};
