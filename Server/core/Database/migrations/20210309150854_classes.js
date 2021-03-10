exports.up = function (knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments();
        table.string('class_id').notNullable().unique()
        table.string('class_name').notNullable()
        table.string('course_id').references('course_id').inTable('courses').index()
        table.string('description')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('classes');
};