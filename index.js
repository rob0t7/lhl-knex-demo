var knexConfig = require('./knexfile')
var knex = require('knex')(knexConfig.development)

// Print All the Beers for Brewery with name Brewer 1
knex
  .select('beers.name')
  .from('beers')
  .innerJoin('breweries', 'beers.brewery_id', 'breweries.id')
  .where("breweries.name", "Brewer 1")
  .then( (results) => {
    console.log(results);
    results.map( (beer) => {
      console.log(beer.name);
    })
  })
