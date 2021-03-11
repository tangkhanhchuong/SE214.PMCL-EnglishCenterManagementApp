exports.up = function (knex) {
    return knex.schema.createTable('person_class', (table) => {
        table.increments();
        table.string('class_id').notNullable()
        table.string('room_id').references('room_id').inTable('rooms')
        table.string('information_id').references('information_id').inTable('personal_information')
        table.integer('schedule_id').references('id').inTable('schedules')
        table.string('description')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('person_class');
};