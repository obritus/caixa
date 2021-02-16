
exports.up = knex => knex.schema.createTable('vendas', table => {
		table.increments('id')
		table.integer('user_id')
			.references('users.id')
			.notNullable()
			.onDelete('CASCADE')
		table.integer('product_id')
			.references('products.id')
			.notNullable()
			.onDelete('CASCADE')
		table.integer('price_venda')
		table.integer('desconto')
		table.timestamps(true, true)
	})

exports.down = knex => knex.schema.dropTable('vendas')
