exports.up = function (knex) {
    return knex.schema.createTable('roles', (table) => {
        table.string('role_id').unique()
        table.string('name').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('roles')
}