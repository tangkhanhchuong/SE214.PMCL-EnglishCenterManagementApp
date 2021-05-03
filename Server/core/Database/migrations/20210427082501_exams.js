
exports.up = function (knex) {
    return knex.schema.createTable('exams', (table) => {
        table.string('exam_id').notNullable().unique()
        table.string('class_id').references('class_id').inTable('classes').index()
        table.string('exam_time').notNullable()
        table.string('exam_date').notNullable()
        table.integer('duration').notNullable()
        table.string('exam_type').notNullable()
        table.string('description').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('exams')
}
