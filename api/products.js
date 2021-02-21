const knex = require('../db')

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

const products = {
	get: async () => {
		try {
			const query = knex.from('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.join('fornecedores', 'fornecedores.id', '=', 'products.fornecedor_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria', 'fornecedores.fornecedor')
			const results = await query
			return results
		} catch (error) {
			next(error)
		}
	},

	// -----------------------------------------------------------------------------
	// -----------------------------------------------------------------------------

	search: async keyword => {
		try {
			const query = knex('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria')
				.where('products.produto', 'like', `%${keyword}%`)
			const results = await query
			return results
		} catch (error) {
			next(error)
		}
	},


	// -----------------------------------------------------------------------------
	// -----------------------------------------------------------------------------

	post: async data => {
		try {
			await knex('products').insert(data)
			return true
		} catch (error) {
			next(error)
		}
	},

	// -----------------------------------------------------------------------------
	// -----------------------------------------------------------------------------

	put: async (id, data) => {
		try {
			const { produto, estoque, barcode, price, marca_id, categoria_id, fornecedor_id } = data
			await knex('products')
				.update({ produto, estoque, barcode, price, marca_id, categoria_id, fornecedor_id })
				.where(id)
			return true
		} catch (error) {
			next(error)
		}
	},

	// -----------------------------------------------------------------------------
	// -----------------------------------------------------------------------------

	delete: async id => {
		try {
			await knex('products').del().where(id)
			return true
		} catch (error) {
			next(error)
		}
	},

	// -----------------------------------------------------------------------------
	// -----------------------------------------------------------------------------

	show: async id => {
		try {
			const query = knex('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria')
				.where("products.id", id)
			const results = await query
			return results
		} catch (error) {
			next(error)
		}
	}
}

module.exports = products