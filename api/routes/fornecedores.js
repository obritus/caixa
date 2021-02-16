const express = require('express')
const knex = require('../db')
const router = express.Router()

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

router
	.get('/', async (req, res, next) => {
		try {
			const query = knex.from('fornecedores')
				.select(['id', 'fornecedor', 'email', 'telefone'])
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
			const query = knex('fornecedores').where({ id })
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
			await knex('fornecedores').insert(req.body)
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
			const { fornecedor, email, telefone } = req.body
			await knex('fornecedores')
				.update({ fornecedor, email, telefone })
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
			await knex('fornecedores').del().where({ id: id })
			res.send(200)
		} catch (error) {
			next(error)
		}
	})

module.exports = router