import React from 'react'
import { Container } from 'reactstrap'
import Produto from '../Produto'
const { ipcRenderer } = window.require('electron')

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			api_data: {},
			isLoading: true
		}
	}
	getProd = () => {
		ipcRenderer.on('api-response', (event, arg) => {
			this.setState({ api_data: arg})
			this.setState({isLoading: false})
		})
	}
	componentDidMount = () => {
		ipcRenderer.send('api', { tabela: 'products', id: window.location.pathname.substr(-1) })
		this.getProd()
		document.title = 'Produto Show'
	}
	render() {
		const {api_data, isLoading} = this.state
		return(
			<Container fluid className="pt-3">
				{	isLoading ? <h2 className="text-center">Carregando...</h2>
					: <Produto data={api_data} />
				}
			</Container>
		)
	}
}