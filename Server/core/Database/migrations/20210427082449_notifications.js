
exports.up = function (knex) {
    return knex.schema.createTable('notifications', (table) => {
        table.string('notification_id').unique()
        table.string('title').notNullable()
        table.string('content').notNullable()
        table.boolean('to_all').notNullable()
        table.string('posted_at').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('notifications')
}
