exports.up = function (knex) {
    return knex.schema.createTable('instructors', (table) => {
        table.string('instructor_id').notNullable().unique()
        table.date('start_working_at').notNullable()
        table.boolean('is_working').notNullable()
        table.string('info_id').references('info_id').inTable('personal_information')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('instructors')
}