
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {
          notification_id: '1',
          title: 'LoremLorem',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
        {
          notification_id: '2',
          title: 'LoremLorem',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
        {
          notification_id: '3',
          title: 'LoremLorem',
          content: 'Your class will be canceled at 15 March',
          posted_at: 'March 21, 2021'
        },
      ]);
    });
};
