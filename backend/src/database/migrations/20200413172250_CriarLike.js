
exports.up = function(knex) {
    return knex.schema.createTable('likes', function (table) {
        table.string('userid').notNullable();
        table.string('solucaoid').notNullable();

        table.foreign('userid').references('userid').inTable('usuario');
        table.foreign('solucaoid').references('id').inTable('solucao');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('likes');
};