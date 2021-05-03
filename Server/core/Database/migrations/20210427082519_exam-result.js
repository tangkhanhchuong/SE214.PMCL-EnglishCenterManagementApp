
exports.up = function (knex) {
    return knex.schema.createTable('exam_result', (table) => {
        table.string('result_id').unique()
        table.string('exam_id').references('exam_id').inTable('exams').index()
        table.string('student_id').references('student_id').inTable('students').index()
        table.integer('result')
        table.string('type')
        table.string('description')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('exam_result')
}
