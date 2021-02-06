import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.min.css'

	import Header from './components/Header'
	import Footer from './components/Footer'
	import Home from './components/Home'
	import Marcas from './components/Marcas'
	import Produtos from './components/Produtos'

ReactDOM.render(
	<div>
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/marcas" component={Marcas} />
				<Route exact path="/produtos" component={Produtos} />
			</Switch>
			<Footer/>
		</BrowserRouter>
	</div>,
	document.getElementById('root')
)