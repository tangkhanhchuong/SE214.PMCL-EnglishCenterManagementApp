
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {
          role_id: '1',
          name: 'Student'
        },
        {
          role_id: '2',
          name: 'Instructor'
        },
        {
          role_id: '3',
          name: 'Admin'
        }
      ]);
    });
};
