const knex_conf = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database.db'
		},
		migrations: {
			directory: `${__dirname}/db/migations`
		},
		seeds: {
			directory: `${__dirname}/db/seeds`
		}
	},

	staging: {
		client: 'sqlite3',
		connection: {
			filename: './database.db'
		},
		migrations: {
			directory: `${__dirname}/db/migations`
		},
		seeds: {
			directory: `${__dirname}/db/seeds`
		}
	},

	production: {
		client: 'sqlite3',
		connection: {
			filename: './database.db'
		},
		migrations: {
			directory: `${__dirname}/db/migations`
		},
		seeds: {
			directory: `${__dirname}/db/seeds`
		}
	}
}

const knex = require('knex')(knex_conf.production)

module.exports = knex