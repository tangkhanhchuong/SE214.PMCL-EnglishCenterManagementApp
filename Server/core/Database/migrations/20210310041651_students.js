exports.up = function (knex) {
    return knex.schema.createTable('students', (table) => {
        table.string('student_id').unique()
        table.boolean('is_studying').notNullable()
        table.string('info_id').references('info_id').inTable('personal_information')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('students')
}