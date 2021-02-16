import React from 'react'
import { Row, Col, Input } from 'reactstrap'

export default props =>
	<Row>
		{console.log(props)}
		<Col>
			<Input type="text" defaultValue={props.data.produto}/>
		</Col>
		<Col>{props.data.marca}</Col>
		<Col>{props.data.categoria}</Col>
		<Col><Input type="number" defaultValue={props.data.price} /></Col>
	</Row>