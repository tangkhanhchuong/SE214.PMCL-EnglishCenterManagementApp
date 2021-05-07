
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('student_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_class').insert([
        {
          class_id: 'IE55.1',
          student_id: 'STU-56032',
          registered_at: 'March 21, 2021',
          paid_at: 'March 21, 2021'
        },
        {
          class_id: 'IE55.1',
          student_id: 'STU-56031',
          registered_at: 'March 21, 2021',
          paid_at: 'March 21, 2021'
        },
        {
          class_id: 'IE60.1',
          student_id: 'STU-56039',
          registered_at: 'March 21, 2021',
          paid_at: 'March 21, 2021'
        }
      ]);
    });
};
