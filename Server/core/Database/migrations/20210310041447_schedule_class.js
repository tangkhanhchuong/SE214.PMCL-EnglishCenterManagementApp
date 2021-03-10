exports.up = function (knex) {
    return knex.schema.createTable('schedule_class', (table) => {
        table.increments();
        table.integer('schedule_id').references('id').inTable('schedules')
        table.string('class_id').references('class_id').inTable('classes')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('schedule_class');
};