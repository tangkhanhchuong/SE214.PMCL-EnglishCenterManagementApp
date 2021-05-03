exports.up = function (knex) {
    return knex.schema.createTable('classes', (table) => {
        table.string('class_id').notNullable().unique()
        table.string('name').notNullable()
        table.string('course_id').references('course_id').inTable('courses').index()
        table.integer('max_students').notNullable()
        table.string('schedule').notNullable()
        table.string('time_slot').notNullable()
        table.integer('duration').notNullable()
        table.date('begin_at').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('classes')
}