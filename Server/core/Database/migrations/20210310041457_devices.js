exports.up = function (knex) {
    return knex.schema.createTable('devices', (table) => {
        table.increments();
        table.string('device_id').notNullable().unique()
        table.string('name').notNullable()
        table.string('type').notNullable()
        table.string('description')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('devices');
};