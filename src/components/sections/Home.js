import React from 'react'
import { Container, Card } from 'reactstrap'
import { CardGrid } from "../CardGrid";
const { ipcRenderer } = window.require('electron')


export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			api_data: [],
			isLoading: false
		}
	}

	getList = () => {
		this.setState({ isLoading: true })
		ipcRenderer.on('api-response', (event, arg) => {
			this.setState({ api_data: arg })
		})
		this.setState({	isLoading: false })
	}

	componentDidMount() {
		ipcRenderer.send('api', {tabela: 'marcas', campos: ['id', 'categoria']})
		this.getList()
	}

	componentWillMount() {
		document.title = 'Vendas'
	}

	render(){
		const { api_data, isLoading } = this.state
		return (
			<Container fluid className="pt-3">
				<h2 className="text-center">Itens</h2>
				{isLoading ? <h2 className="text-center bg-danger">Carregando...</h2>
					: api_data.map((data, index) =>
						<Card color="secondary" className="mb-1" key={index}>
							<CardGrid>
								<p title="Marca"><strong>{data.id} {data.marca}</strong></p>
							</CardGrid>
						</Card>
					)}
			</Container>
		)
	}
}