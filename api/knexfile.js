module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/database.db'
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
      filename: './db/database.db'
	},
	migrations: {
		directory: `${__dirname}/db/migations`
	}
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './db/database.db'
	},
	migrations: {
		directory: `${__dirname}/db/migations`
	}
  }
}
