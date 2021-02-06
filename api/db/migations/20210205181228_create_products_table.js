
exports.up = knex => knex.schema.createTable('products', table => {
		table.increments('id')
		table.text('produto')
		table.integer('price')
		table.integer('categoria_id')
			.references('categorias.id')
			.notNullable()
			.onDelete('CASCADE')
		table.integer('marca_id')
			.references('marcas.id')
			.notNullable()
			.onDelete('CASCADE')
		table.integer('fornecedor_id')
			.references('fornecedores.id')
		table.timestamps(true, true)
	})

exports.down = knex => knex.schema.dropTable('products')
