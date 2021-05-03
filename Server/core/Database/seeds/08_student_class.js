
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('student_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_class').insert([
        {
          class_id: 'IE55.1',
          student_id: '18520010',
          registered_at: 'March 21, 2021',
          paid_at: 'March 21, 2021'
        },
        {
          class_id: 'IE55.1',
          student_id: '18520168',
          registered_at: 'March 21, 2021',
          paid_at: 'March 21, 2021'
        },
        {
          class_id: 'IE60.1',
          student_id: '18520109',
          registered_at: 'March 21, 2021',
          paid_at: 'March 21, 2021'
        }
      ]);
    });
};
