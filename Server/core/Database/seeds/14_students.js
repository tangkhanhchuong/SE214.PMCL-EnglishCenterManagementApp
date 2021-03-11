
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { joiner_id: "18520010", information_id: '111' },
        { joiner_id: "18520168", information_id: '333' }
      ]);
    });
};
