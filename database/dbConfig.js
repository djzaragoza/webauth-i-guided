const knex = require('knex');

const knexConfig = require('../knexfile.js');

const bcrypt = require('bcryptjs');

const credentials = req.body;
const hash = bcrypt.hashSync(credentials.password, 14);

module.exports = knex(knexConfig.development);
