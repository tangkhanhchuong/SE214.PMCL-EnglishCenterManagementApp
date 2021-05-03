
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructor_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructor_class').insert([
        {
          class_id: 'IE55.1',
          instructor_id: 'INS-123'
        },
        {
          class_id: 'IE55.1',
          instructor_id: 'INS-324'
        },
        {
          class_id: 'IE60.1',
          instructor_id: 'INS-678'
        }
      ]);
    });
};
