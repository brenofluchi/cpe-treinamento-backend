
exports.up = function(knex) {
    return knex.schema.createTable("user", function (table){
        table.string('user_id').primary().notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('estado').notNullable();
        table.string('cidade').notNullable();
        table.string('cep').notNullable();
        table.string('logradouro').notNullable();
        table.string('sonho').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable("user");
  };
  