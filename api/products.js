const knex = require('../knex')

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

const products = {
	get: () => knex.from('products')
			.join('categorias', 'categorias.id', '=', 'products.categoria_id')
			.join('marcas', 'marcas.id', '=', 'products.marca_id')
			.join('fornecedores', 'fornecedores.id', '=', 'products.fornecedor_id')
			.select('products.*', 'marcas.marca', 'categorias.categoria', 'fornecedores.fornecedor'),

	// -------------------------------------------------------------------------
	// -------------------------------------------------------------------------

	search: keyword => knex('products')
		.join('categorias', 'categorias.id', '=', 'products.categoria_id')
		.join('marcas', 'marcas.id', '=', 'products.marca_id')
		.select('products.*', 'marcas.marca', 'categorias.categoria')
		.where('products.produto', 'like', `%${keyword}%`),

	// -------------------------------------------------------------------------
	// -------------------------------------------------------------------------

	post: data => knex('products').insert(data),

	// -------------------------------------------------------------------------
	// -------------------------------------------------------------------------

	put: (id, data) => {
		const { produto, estoque, barcode, price, marca_id, categoria_id, fornecedor_id } = data
		knex('products')
			.update({ produto, estoque, barcode, price, marca_id, categoria_id, fornecedor_id })
			.where(id)
	},

	// -------------------------------------------------------------------------
	// -------------------------------------------------------------------------

	delete: id => knex('products').del().where(id),

	// -------------------------------------------------------------------------
	// -------------------------------------------------------------------------

	show: id => knex('products')
		.join('categorias', 'categorias.id', '=', 'products.categoria_id')
		.join('marcas', 'marcas.id', '=', 'products.marca_id')
		.select('products.*', 'marcas.marca', 'categorias.categoria')
		.where("products.id", id).first()
}

module.exports = products