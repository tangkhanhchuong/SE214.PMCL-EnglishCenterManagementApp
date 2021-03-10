const { hashPassword } = require("../../Auth/authentication/hashing")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(async () => {
      // Inserts seed entries
      const hashedPassword = await hashPassword("123456")
      return knex('accounts').insert([
        { account_id: "111", email: "18520010@gmail.com", username: "18520010", password: hashedPassword },
        { account_id: "222", email: "18520383@gmail.com", username: "18520383", password: hashedPassword },
        { account_id: "333", email: "18520168@gmail.com", username: "18520168", password: hashedPassword },
      ]);
    });
};
