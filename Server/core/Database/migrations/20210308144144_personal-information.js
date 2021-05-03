
exports.up = function (knex) {
    return knex.schema.createTable('personal_information', (table) => {
        table.string('info_id').notNullable().unique()
        table.string('name').notNullable()
        table.enu('gender', ['Male', 'Female']).notNullable().default('Male')
        table.string('email').notNullable()
        table.string('dob').notNullable()
        table.string('phone').notNullable()
        table.string('address').notNullable()
        table.string('avatar_url')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('personal_information')
}
