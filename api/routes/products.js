const express = require('express')
const knex = require('../db')
const router = express.Router()

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

router
	.get('/', async (req, res, next) => {
		try {
			const query = knex.from('products')
				.join('categorias', 'categorias.id', '=', 'products.categoria_id')
				.join('marcas', 'marcas.id', '=', 'products.marca_id')
				.join('fornecedores', 'fornecedores.id', '=', 'products.fornecedor_id')
				.select('products.*', 'marcas.marca', 'categorias.categoria')
			const results = await query
			console.log(results)
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

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	.post('/', async (req, res, next) => {
		try {
			await knex('products').insert(req.body)
			res.send()
		} catch (error) {
			next(error)
		}
	})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	.put('/:id', async (req, res, next) => {
		try {
			const { id } = req.params
			const { produto, estoque, barcode, price, marca_id, categoria_id, fornecedor_id } = req.body
			await knex('products')
				.update({produto, estoque, barcode, price, marca_id, categoria_id, fornecedor_id })
				.where({ id })
			res.sendStatus(200)
		} catch (error) {
			next(error)
		}
	})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	.delete('/:id', async (req, res, next) => {
		try {
			const { id } = req.params
			await knex('products').del().where({ id: id })
			res.send(200)
		} catch (error) {
			next(error)
		}
	})

module.exports = router