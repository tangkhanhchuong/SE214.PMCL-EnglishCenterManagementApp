
exports.up = function (knex) {
    return knex.schema.createTable('materials', (table) => {
        table.string('material_id').notNullable().unique()
        table.string('title')
        table.string('class_id').references('class_id').inTable('classes').index()
        table.string('description')
        table.date('posted_at').notNullable()
        table.string('url')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('materials')
}
