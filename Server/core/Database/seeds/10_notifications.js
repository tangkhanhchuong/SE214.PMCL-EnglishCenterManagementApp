
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {
          notification_id: '1',
          title: 'Notice 1',
          to_all: 'false',
          content: 'Your class will be canceled at 15 March Your class will be canceled at 15 March Your class will be canceled at 15 March',
          posted_at: 'March 22, 2021'
        },
        {
          notification_id: '2',
          title: 'Notice 2',
          to_all: 'false',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 23, 2021'
        },
        {
          notification_id: '3',
          to_all: 'false',
          title: 'Notice 3',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
        {
          notification_id: '4',
          title: 'Notice 4',
          to_all: 'true',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
        {
          notification_id: '5',
          title: 'Notice 5',
          to_all: 'true',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
        {
          notification_id: '6',
          title: 'Notice 6',
          to_all: 'true',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
      ]);
    });
};
