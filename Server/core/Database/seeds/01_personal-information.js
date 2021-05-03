
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('personal_information').del()
    .then(function () {
      // Inserts seed entries
      return knex('personal_information').insert([
        {
          info_id: '1',
          name: 'Tang Khanh Chuong',
          gender: 'Male',
          email: 'chuong@gmail.com',
          dob: 'April 21, 2000',
          phone: '12345678',
          address: 'Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh',
          avatar_url: ''
        },
        {
          info_id: '2',
          name: 'Tan Huu Toan',
          gender: 'Male',
          email: 'toan@gmail.com',
          dob: 'April 21, 2000',
          phone: '12345678',
          address: 'Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh',
          avatar_url: ''
        },
        {
          info_id: '3',
          name: 'Nguyen Chi Thanh',
          gender: 'Male',
          email: 'thanh@gmail.com',
          dob: 'April 21, 2000',
          phone: '12345678',
          address: 'Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh',
          avatar_url: ''
        },
        {
          info_id: '4',
          name: 'Nguyen Dac Thien Ngan',
          gender: 'Female',
          email: 'ngan@gmail.com',
          dob: 'April 21, 2000',
          phone: '12345678',
          address: 'Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh',
          avatar_url: ''
        },
        {
          info_id: '5',
          name: 'Ung Bao Tien',
          gender: 'Female',
          email: 'tien@gmail.com',
          dob: 'April 21, 2000',
          phone: '12345678',
          address: 'Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh',
          avatar_url: ''
        },
        {
          info_id: '6',
          name: 'Chung Thai Dung',
          gender: 'Female',
          email: 'dung@gmail.com',
          dob: 'April 21, 2000',
          phone: '12345678',
          address: 'Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh',
          avatar_url: ''
        },
      ]);
    });
};
