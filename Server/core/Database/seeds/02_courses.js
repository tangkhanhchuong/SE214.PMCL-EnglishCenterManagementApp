
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {
          course_id: 'IE50',
          name: "Ielts 5.0",
          fee: 2000000,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          course_id: 'IE55',
          name: "Ielts 5.5",
          fee: 2000000,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          course_id: 'IE60',
          name: "Ielts 6.0",
          fee: 2000000,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
      ]);
    });
};
