const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'Pichet',
    database: 'test_db'
  }
})
const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf