import React from 'react'
import { Container } from 'reactstrap'

export default class extends React.Component {
	componentWillMount() {
		document.title = 'Marcas'
	}
	render(){
		return (
			<Container fluid>
				<h1 className="main-title">Marcas</h1>
			</Container>
		)
	}
 }