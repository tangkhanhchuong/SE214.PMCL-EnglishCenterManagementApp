
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        { room_id: "E3.1", room_name: "English Room 1", num_of_seat: 30 },
        { room_id: "E3.2", room_name: "English Room 1", num_of_seat: 30 },
        { room_id: "E4.1", room_name: "France Room 2", num_of_seat: 30 },
      ]);
    });
};
