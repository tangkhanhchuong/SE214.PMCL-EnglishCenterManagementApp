
exports.up = function (knex) {
    return knex.schema.createTable('student_class', (table) => {
        table.string('class_id').references('class_id').inTable('classes').index()
        table.string('student_id').references('student_id').inTable('students').index()
        table.date('registered_at').notNullable()
        table.date('paid_at')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('student_class')
}
