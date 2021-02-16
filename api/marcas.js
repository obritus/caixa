const knex = require('../db')

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

const marcas = {
	get: async () => {
		try {
			const query = knex.from('marcas').select(['id', 'marca'])
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
			await knex('marcas').insert(data)
			return true
		} catch (error) {
			next(error)
		}
	},

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	put: async id => {
		try {
			await knex('marcas').update({ marca }).where(id)
			return true
		} catch (error) {
			next(error)
		}
	},

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	delete: async id => {
		try {
			await knex('marcas').del().where(id)
			return true
		} catch (error) {
			next(error)
		}
	},

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	show: async id => {
		try {
			const query = knex.from('marcas').select(['id', 'marca']).where(id)
			const results = await query
			return results
		} catch (error) {
			next(error)
		}
	}
}

module.exports = marcas