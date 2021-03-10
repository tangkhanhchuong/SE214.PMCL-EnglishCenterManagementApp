
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        { name: "2-4-6" },
        { name: "3-5-7" },
        { name: "2-4-5" },
      ]);
    });
};
