
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          student_id: '18520010',
          is_studying: false,
          info_id: '1'
        },
        {
          student_id: '18520168',
          is_studying: true,
          info_id: '2'
        },
        {
          student_id: '18520109',
          is_studying: true,
          info_id: '3'
        }
      ]);
    });
};
