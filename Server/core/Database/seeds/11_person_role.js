
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('person_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('person_role').insert([
        { information_id: "111", account_id: "111", role_id: 1 },
        { information_id: "222", account_id: "222", role_id: 2 },
        { information_id: "333", account_id: "333", role_id: 1 }])
    });
};
