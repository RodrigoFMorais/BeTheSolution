
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.string('userid').primary();
        table.string('name').notNullable();
        table.string('passwd').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('dnasc').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};