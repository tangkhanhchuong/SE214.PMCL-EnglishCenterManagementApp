
exports.up = function (knex) {
    return knex.schema.createTable('accounts', (table) => {
        table.increments("id");
        table.string('account_id').unique()
        table.string('username').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.timestamps(true, true)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('accounts');
};
