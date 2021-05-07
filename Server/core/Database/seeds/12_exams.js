
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exams').del()
    .then(function () {
      // Inserts seed entries
      return knex('exams').insert([

        {
          exam_id: 'EX124',
          class_id: 'IE55.1',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 45,
          exam_type: 'Middle Term 2',
          description: ''
        },
        {
          exam_id: 'EX125',
          class_id: 'IE55.1',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 20,
          exam_type: 'Middle Term 1',
          description: ''
        },
        {
          exam_id: 'EX126',
          class_id: 'IE60.1',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 20,
          exam_type: 'Middle Term 1',
          description: ''
        },
        {
          exam_id: 'EX127',
          class_id: 'IE60.1',
          exam_time: '17:00',
          exam_date: 'March 21, 2021',
          duration: 60,
          exam_type: 'Final Term',
          description: ''
        },
      ]);
    });
};
