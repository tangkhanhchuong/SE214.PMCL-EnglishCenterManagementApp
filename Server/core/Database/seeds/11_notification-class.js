
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notification_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('notification_class').insert([
        {
          notification_id: '1',
          class_id: 'IE55.1',
        },
        {
          notification_id: '2',
          class_id: 'IE55.1',
        },
        {
          notification_id: '3',
          class_id: 'IE60.1',
        },
        {
          notification_id: '1',
          class_id: 'IE60.1',
        }
      ]);
    });
};
