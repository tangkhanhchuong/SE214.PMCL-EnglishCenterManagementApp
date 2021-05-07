
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          student_id: 'STU-56032',
          is_studying: false,
          info_id: '1'
        },
        {
          student_id: 'STU-56031',
          is_studying: true,
          info_id: '2'
        },
        {
          student_id: 'STU-56039',
          is_studying: true,
          info_id: '3'
        }
      ]);
    });
};
