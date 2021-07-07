const knex = require('knex')

const knexfile = require('./knexfile')

const knexEnv = ( process.env.NODE_ENV == "dev" || process.env.NODE_ENV =="test") ? knexfile.development : knexfile.production

const database = knex(knexEnv)

module.exports = database