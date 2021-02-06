
exports.up = knex => knex.schema.createTable('fornecedores', table => {
		table.increments('id')
		table.text('fornecedor')
		table.integer('telefone')
		table.text('email')
		table.timestamps(true, true)
	})

exports.down = knex => knex.schema.dropTable('fornecedores')
