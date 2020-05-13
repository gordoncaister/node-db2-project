const knex = require('knex')
const knexfile = require("../knexfile.js")
const dbConfig = knexfile.development;
module.exports = knex(dbConfig);