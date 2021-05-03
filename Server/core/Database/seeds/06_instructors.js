
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        {
          instructor_id: 'INS-123',
          info_id: '4',
          is_working: false,
          start_working_at: 'March 21, 2021'
        },
        {
          instructor_id: 'INS-324',
          info_id: '5',
          is_working: true,
          start_working_at: 'March 21, 2021'
        },
        {
          instructor_id: 'INS-678',
          info_id: '6',
          is_working: true,
          start_working_at: 'March 21, 2021'
        }
      ]);
    });
};
