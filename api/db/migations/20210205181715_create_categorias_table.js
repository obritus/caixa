
exports.up = knex => knex.schema.createTable('categorias', table => {
		table.increments('id')
		table.text('categoria')
		table.timestamps(true, true)
	})

exports.down = knex => knex.schema.dropTable('categorias')
