exports.up = function (knex) {
    return knex.schema.createTable('courses', (table) => {
        table.increments();
        table.string('course_id').notNullable().unique()
        table.string('course_name').notNullable()
        table.string('description')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('courses');
};