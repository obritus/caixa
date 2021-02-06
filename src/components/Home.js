import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { Container } from 'reactstrap'

export default class extends React.Component {
	componentWillMount() {
		document.title = 'Página Inicial'
	}
	render(){
		return (
			<Container fluid>
				<h1 className="main-title">Venda</h1>
				
			</Container>
		)
	}
}