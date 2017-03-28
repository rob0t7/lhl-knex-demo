exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('beers', (table) => {
      table.increments('id');
      table.string('name', 255).notNullable();
      table.decimal('abv').notNullable();
      table.integer('brewery_id').unsigned().index();
      table.timestamps();
    }),
    knex.schema.alterTable('breweries', (table) => {
      table.string('website', 255);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beers');
};
