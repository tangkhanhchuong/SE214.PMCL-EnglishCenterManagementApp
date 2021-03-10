exports.up = function (knex) {
    return knex.schema.createTable('students', (table) => {
        table.increments();
        table.string('joiner_id').notNullable().unique()
        table.string('information_id').references('information_id').inTable('personal_information')
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('students');
};