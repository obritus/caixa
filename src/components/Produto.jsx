import React from 'react'
import { Row, Col, Input } from 'reactstrap'
import InputOptions from './InputOptions'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<Row>
				<Col>
					<Input type="text" defaultValue={this.props.produto} className="btn-lg"/>
				</Col>
				<Col>
					<InputOptions tabela="categorias" />
				</Col>
				<Col>
					<Input type="text" defaultValue={this.props.marca} className="btn-lg"/>
				</Col>
				<Col>
					<Input type="number" defaultValue={this.props.estoque} className="btn-lg"/>
				</Col>
				<Col>
					<Input type="number" defaultValue={this.props.barcode} className="btn-lg"/>
				</Col>
			</Row>
		)
	}
}