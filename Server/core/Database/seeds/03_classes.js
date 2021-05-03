
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          class_id: 'IE50.1',
          course_id: 'IE50',
          name: 'Ielts 5.0 L1',
          max_students: '20',
          schedule: '246',
          time_slot: '18:00-19:30',
          duration: '3',
          begin_at: 'September 1, 2021'
        },
        {
          class_id: 'IE50.2',
          course_id: 'IE50',
          name: 'Ielts 5.0 L2',
          max_students: '20',
          schedule: '357',
          time_slot: '18:00-19:30',
          duration: '3',
          begin_at: 'September 1, 2021'
        },
        {
          class_id: 'IE55.1',
          course_id: 'IE55',
          name: 'Ielts 5.5 L1',
          max_students: '20',
          schedule: '246',
          time_slot: '19:30-21:00',
          duration: '3',
          begin_at: 'December 1, 2021'
        },
        {
          class_id: 'IE55.2',
          course_id: 'IE55',
          name: 'Ielts 5.5 L2',
          max_students: '20',
          schedule: '357',
          time_slot: '19:30-21:00',
          duration: '3',
          begin_at: 'September 1, 2021'
        },
        {
          class_id: 'IE60.1',
          course_id: 'IE60',
          name: 'Ielts 6.0 L1',
          max_students: '20',
          schedule: '357',
          time_slot: '16:00-17:30',
          duration: '3',
          begin_at: 'November 1, 2021'
        },
        {
          class_id: 'IE60.2',
          course_id: 'IE60',
          name: 'Ielts 6.0 L2',
          max_students: '20',
          schedule: '357',
          time_slot: '16:00-17:30',
          duration: '3',
          begin_at: 'September 1, 2021'
        }
      ]);
    });
};
