const express = require('express')
const knex = require('../db')
const router = express.Router()

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

router
	.get('/', async (req, res, next) => {
		try {
			const query = knex('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria')
			const results = await query
			res.json(results)
		} catch (error) {
			next(error)
		}
	})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	.get('/:id', async (req, res, next) => {
		try {
			const { id } = req.params
			const query = knex('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria')
				.where("products.id", id)
			const results = await query
			res.json(results)
		} catch (error) {
			next(error)
		}
	})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	.get('/keywords/:keyword', async (req, res, next) => {
		try {
			const { keyword } = req.params
			const query = knex('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria')
				.where('products.produto', 'like', `%${keyword}%`)
			const results = await query
			res.json(results)
		} catch (error) {
			next(error)
		}
	})

module.exports = router