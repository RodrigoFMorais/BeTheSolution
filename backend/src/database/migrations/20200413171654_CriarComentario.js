exports.up = function(knex) {
    return knex.schema.createTable('comentarios', function (table) {
        table.increments();
        table.string('comentario').notNullable();
        table.string('userid').notNullable();
        table.string('solucaoid').notNullable();

        table.foreign('userid').references('userid').inTable('usuario');
        table.foreign('solucaoid').references('id').inTable('solucao');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comentarios');
};