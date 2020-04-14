
exports.up = function(knex) {
    return knex.schema.createTable('solucoes', function (table) {
        table.increments();
        table.string('titulo').notNullable();
        table.string('problemaDescricao').notNullable();
        table.string('problemaSolucao').notNullable();
        table.string('userid').notNullable();

        table.foreign('userid').references('userid').inTable('usuarios');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('solucoes');
};
