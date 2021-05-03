
exports.up = function (knex) {
    return knex.schema.createTable('notification_class', (table) => {
        table.string('class_id').references('class_id').inTable('classes').index()
        table.string('notification_id').references('notification_id').inTable('notifications').index()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('notification_class')
}
