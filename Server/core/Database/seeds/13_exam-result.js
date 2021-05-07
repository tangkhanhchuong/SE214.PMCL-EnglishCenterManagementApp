
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exam_result').del()
    .then(function () {
      // Inserts seed entries
      return knex('exam_result').insert([
        {
          result_id: 'RLT1',
          exam_id: 'EX124',
          student_id: 'STU-56039',
          result: 8,
          type: 'Good',
          description: ''
        },
        {
          result_id: 'RLT2',
          exam_id: 'EX125',
          student_id: 'STU-56031',
          result: 10,
          type: 'Excellent',
          description: ''
        },
        {
          result_id: 'RLT3',
          exam_id: 'EX125',
          student_id: 'STU-56032',
          result: 4,
          type: 'Bad',
          description: 'Need to practice more !!!'
        }
      ]);
    });
};
