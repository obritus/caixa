
exports.up = knex => knex.schema.createTable('users', table => {
		table.increments('id')
		table.text('user')
		table.text('password')
		table.text('name')
		table.timestamps(true, true)
	})

exports.down = knex => knex.schema.dropTable('users')
