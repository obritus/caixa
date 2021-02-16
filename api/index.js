const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

const rotas_principais = require('./routes')
const products = require('./routes/products')
const marcas = require('./routes/marcas')
const categorias = require('./routes/categorias')
const fornecedores = require('./routes/fornecedores')

// const functions = require('./functions')
// const session = require('express-session')

// DEFINIÇÕES
	// SESSIONS ----------------------------------------------------------------
		// app.use(session({
		// 	secret: "hash",
		// 	resave: true,
		// 	saveUninitialized: true
		// }))
	// BODY PARSER -------------------------------------------------------------
		app.use(cors())
		app.use(express.urlencoded({ extended: true }))
		app.use(express.json())
		
	// ROTAS -------------------------------------------------------------------
		app.use('/', rotas_principais)
		app.use('/products', products)
		app.use('/categorias', categorias)
		app.use('/marcas', marcas)
		app.use('/fornecedores', fornecedores)
		app.use('/vendas', products)

//------------------------- LIGANDO O SERVIDOR ------------------------

app.listen(port, () => {
	console.log(`Servidor rodando na http://localhost:${port}`)
})