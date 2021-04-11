
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('personal_information').del()
        .then(() => {
            // Inserts seed entries
            return knex('personal_information').insert([
                {
                    information_id: "111",
                    name: "Tang Khanh Chuong",
                    email: "chuongbr0@gmail.com",
                    gender: "Male",
                    dob: "April 21th, 2000",
                    address_id: "111",
                    phone: "12345678"
                },
                {
                    information_id: "222",
                    name: "Tan Huu Toan",
                    email: "kunbr0@gmail.com",
                    gender: "Male",
                    dob: "November 11th, 2000",
                    address_id: "231",
                    phone: "12345678"
                },
                {
                    information_id: "333",
                    name: "Ung Bao Tien",
                    email: "tienbaobao@gmail.com",
                    gender: "Female",
                    dob: "December 5th, 2000",
                    address_id: "134",
                    phone: "12345678"
                }
            ]);
        });
};
