exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('breweries')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('breweries').insert([
          {id: 1, name: 'Brewer 1'},
          {id: 2, name: 'Brewery 2'},
          {id: 3, name: 'Brewer 3'}
        ]);
      }),
    knex('beers').del().then( () => {
      return knex('beers').insert([
        {id: 1, name: 'Beer 1', abv: 5.0, brewery_id: 1},
        {id: 2, name: 'Beer 2', abv: 4.5, brewery_id: 1},
        {id: 3, name: 'Beer 3', abv: 6.0, brewery_id: 2}
      ]);
    })])
};
