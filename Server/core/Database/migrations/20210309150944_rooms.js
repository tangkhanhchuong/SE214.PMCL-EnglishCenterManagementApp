exports.up = function (knex) {
    return knex.schema.createTable('rooms', (table) => {
        table.increments();
        table.string('room_id').notNullable().unique()
        table.string('room_name').notNullable()
        table.integer('num_of_seat').default(0)
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('rooms');
};