exports.up = function (knex) {
    return knex.schema.createTable('person_role', (table) => {
        table.increments();
        table.string('information_id').references('information_id').inTable('personal_information').index()
        table.string('account_id').references('account_id').inTable('accounts').index()
        table.integer('role_id').references('id').inTable('roles').index()
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('person_role');
};