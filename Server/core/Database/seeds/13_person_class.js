
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('person_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('person_class').insert([
        { room_id: "E3.1", information_id: "111", class_id: "ENG1_21", schedule_id: 1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { room_id: "E3.1", information_id: "222", class_id: "ENG1_22", schedule_id: 1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { room_id: "E4.1", information_id: "333", class_id: "ENG2_21", schedule_id: 2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      ]);
    });
};
