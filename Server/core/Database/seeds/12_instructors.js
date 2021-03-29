
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        { joiner_id: "18520383", information_id: '222' }
      ]);
    });
};
