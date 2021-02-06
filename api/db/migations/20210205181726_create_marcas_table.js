
exports.up = knex => knex.schema.createTable('marcas', table => {
		table.increments('id')
		table.text('marca')
		table.timestamps(true, true)
	})

exports.down = knex => knex.schema.dropTable('marcas')
