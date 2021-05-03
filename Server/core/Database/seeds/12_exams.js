
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exams').del()
    .then(function () {
      // Inserts seed entries
      return knex('exams').insert([
        {
          exam_id: 'EX123',
          class_id: 'IE60.1',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 1,
          exam_type: '15 min',
          description: ''
        },
        {
          exam_id: 'EX124',
          class_id: 'IE50.1',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 1,
          exam_type: '15 min',
          description: ''
        },
        {
          exam_id: 'EX125',
          class_id: 'IE55.2',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 1,
          exam_type: '15 min',
          description: ''
        },
        {
          exam_id: 'EX126',
          class_id: 'IE60.2',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 1,
          exam_type: '15 min',
          description: ''
        },
      ]);
    });
};
