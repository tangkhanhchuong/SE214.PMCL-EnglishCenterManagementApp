
exports.up = function (knex) {
    return knex.schema.createTable('accounts', (table) => {
        table.string('account_id').unique()
        table.string('info_id').references('info_id').inTable('personal_information').index()
        table.string('role_id').references('role_id').inTable('roles').index()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('accounts')
}
