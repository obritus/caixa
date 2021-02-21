import React from 'react'
import { Row, Col, Input } from 'reactstrap'

export default props =>
	<Row>
		{console.log("props", props)}
		<Col>
			<Input type="text" defaultValue={props.data.produto}/>
		</Col>
		<Col>
			<Input type="text"
				defaultValue={`R$ ${props.data.price
					.toString().replace(".", ',')}` }
			/>
		</Col>
		<Col>
			<Input type="text" defaultValue={props.data.categoria}/>
		</Col>
		<Col>
			<Input type="text" defaultValue={props.data.marca}/>
		</Col>
		<Col>
			<Input type="text" defaultValue={props.data.estoque}/>
		</Col>
		<Col>
			<Input type="text" disabled defaultValue={props.data.barcode}/>
		</Col>
	</Row>