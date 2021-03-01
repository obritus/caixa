import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './app.sass'

	import Header from './components/Header'
	import Footer from './components/Footer'
	import Home from './components/sections/Home'
	import Marcas from './components/sections/Marcas'
	import Categorias from './components/sections/Categorias'
	import Fornecedores from './components/sections/Fornecedores'
	import Notas from './components/sections/Notas'
	import Config from './components/sections/Config'
	import Produtos from './components/sections/Produtos'
		import ProdutoShow from './components/sections/Produto'

ReactDOM.render(
	<div>
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/produtos" component={Produtos} />
				<Route path="/produtos/:id" component={ProdutoShow} />
				<Route exact path="/marcas" component={Marcas} />
				<Route exact path="/fornecedores" component={Fornecedores} />
				<Route exact path="/categorias" component={Categorias} />
				<Route exact path="/notas" component={Notas} />
				<Route exact path="/config" component={Config} />
			</Switch>
			<Footer/>
		</BrowserRouter>
	</div>,
	document.querySelector('main')
)