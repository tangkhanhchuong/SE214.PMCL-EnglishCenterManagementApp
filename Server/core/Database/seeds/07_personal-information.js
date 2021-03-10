
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('personal_information').del()
        .then(() => {
            // Inserts seed entries
            return knex('personal_information').insert([
                { information_id: "111", name: "Tang Khanh Chuong", email: "chuongbr0@gmail.com", gender: "Male", address_id: "111" },
                { information_id: "222", name: "Tan Huu Toan", email: "kunbr0@gmail.com", gender: "Male", address_id: "231", },
                { information_id: "333", name: "Ung Bao Tien", email: "tienbaobao@gmail.com", gender: "Female", address_id: "134", }
            ]);
        });
};
