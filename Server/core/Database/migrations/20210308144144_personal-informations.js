
exports.up = function (knex) {
    return knex.schema.createTable('personal_information', (table) => {
        table.increments();
        table.string('information_id').notNullable().unique()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('dob').notNullable()
        table.string('phone').notNullable()
        table.enu('gender', ['Male', 'Female']).notNullable().default('Male')
        table.string('address_id').references('address_id').inTable('addresses').index()
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('personal_information');
};
