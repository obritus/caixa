import React from 'react'
import { Container } from 'reactstrap'

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<Container className="pt-3" fluid>
				<h1 className="main-title">Configurações do aplicativo</h1>
			</Container>
		)
	}
}