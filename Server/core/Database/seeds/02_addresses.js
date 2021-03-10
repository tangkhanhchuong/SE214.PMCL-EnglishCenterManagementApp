
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(() => {
      // Inserts seed entries
      return knex('addresses').insert([
        { address_id: "111", street_info: "184 Tran Hung Dao", ward: "5", district: "A", city: "Chau Doc", province: "An Giang", country: "Vietnam" },
        { address_id: "231", street_info: "8 Xom Dat", ward: "1", district: "Binh Thanh", city: "Ho Chi Minh", country: "Vietnam" },
        { address_id: "134", street_info: "34 Tran Nguyen Khai", ward: "8", district: "11", city: "Phu Yen", country: "Vietnam" },
      ]);
    });
};
