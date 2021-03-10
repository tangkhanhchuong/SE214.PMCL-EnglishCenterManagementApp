exports.up = function (knex) {
    return knex.schema.createTable('device_room', (table) => {
        table.increments();
        table.string('device_id').references('device_id').inTable('devices')
        table.string('room_id').references('room_id').inTable('rooms')
        table.string('borrower_id').references('joiner_id').inTable('students')
        table.date('return_date')
        table.date('borrow_date')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('device_room');
};