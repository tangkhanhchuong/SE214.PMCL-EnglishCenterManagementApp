
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {
          material_id: 'MT1',
          class_id: 'IE55.1',
          title: 'Chapter_1',
          posted_at: 'March 21, 2021',
          url: 'http://localhost:5000',
          description: ''
        },
        {
          material_id: 'MT2',
          class_id: 'IE55.1',
          title: 'Chapter_2',
          posted_at: 'March 21, 2021',
          url: 'http://localhost:5000',
          description: ''
        },
        {
          material_id: 'MT3',
          class_id: 'IE60.1',
          title: 'Chapter_1',
          posted_at: 'March 21, 2021',
          url: 'http://localhost:5000',
          description: ''
        }
      ]);
    });
};
