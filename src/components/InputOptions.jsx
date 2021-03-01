import React from 'react'
import { Row, Col, Input } from 'reactstrap'
const { ipcRenderer } = window.require('electron')

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			api_data: [],
			isLoading: true
		}
	}
	getList = () => {
		this.setState({ isLoading: true })
		ipcRenderer.on('api-response', (event, arg) => {
			this.setState({ api_data: arg })
		})
		this.setState({ isLoading: false })
	}

	componentDidMount() {
		ipcRenderer.send('api', { tabela: this.props.tabela })
		this.getList()
	}
	render() {
		return (
			<Input type="select" name="select" className="form-control btn-lg">
				{ this.state.isLoading ? <option disabled>1</option> :
					this.state.api_data.map((option, index) => {
						<option>{option.id}</option>
					})
				}
				
			</Input>
		)
	}	
}