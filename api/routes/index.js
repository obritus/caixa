const express = require('express')
const knex = require('../db')
const router = express.Router()

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	router.get('/', (req, res) => {
		res.send(200)
	})

module.exports = router