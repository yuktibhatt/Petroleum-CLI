exports.up = function (knex) {
  return knex.schema.createTable('reports', (table) => {
    table.increments("id").primary().unsigned();

    table.integer("year").notNull();
    table.string("petroleum_product");
    table.integer("sale");
    table.string("country");

    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reports');
};

