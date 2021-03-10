
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('devices').del()
    .then(function () {
      // Inserts seed entries
      return knex('devices').insert([
        { device_id: "MS-1", name: "Mouse-1", type: "Mouse", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { device_id: "MS-2", name: "Mouse-2", type: "Mouse", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { device_id: "RM-1", name: "Remote-1", type: "Remote", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      ]);
    });
};
