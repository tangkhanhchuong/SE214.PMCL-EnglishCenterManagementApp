
exports.up = function (knex) {
    return knex.schema.createTable('addresses', (table) => {
        table.increments();
        table.string('address_id').unique()
        table.string('street_info').notNullable()
        table.string('ward')
        table.string('district')
        table.string('province')
        table.string('city').notNullable()
        table.string('country').notNullable()
        table.timestamps(true, true)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('addresses');
};
