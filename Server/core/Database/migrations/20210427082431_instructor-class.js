
exports.up = function (knex) {
    return knex.schema.createTable('instructor_class', (table) => {
        table.string('class_id').references('class_id').inTable('classes').index()
        table.string('instructor_id').references('instructor_id').inTable('instructors').index()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('instructor_class')
}
