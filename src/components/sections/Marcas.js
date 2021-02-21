import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'reactstrap'
import CardGrid from '../CardGrid'
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
		this.setState({ isLoading: false })
	}

	componentDidMount() {
		ipcRenderer.send('api', { tabela: 'products' })
		this.getList()
	}

	componentWillMount() {
		document.title = 'Vendas'
	}

	searchProd = data => {
		this.setState({ isLoading: true })
		ipcRenderer.send('api', { tabela: 'products', like: data })
	}
	render() {
		const { api_data, isLoading } = this.state
		return (
			<Container fluid>
				<div className="pt-3">
					<form>
						<input
							type="search"
							className="form-control form-control-lg"
							id="search_product"
							aria-describedby="searchHelp"
							placeholder="Busca rápida"
							onChange={() => {
								const valor = document.getElementById('search_product').value
								if (valor) {
									this.searchProd(valor)
								} else {
									this.getProd()
								}
							}}
						/>
					</form>
				</div>
				<div className="pt-3">
					{isLoading ? <h2 className="text-center">Carregando...</h2>
						: api_data.map((data, index) =>
							<Card color="secondary" className="mb-1" key={index}>
								<CardGrid>
									<p><strong><Link to={`produtos/${data.id}`}>{data.produto}</Link></strong></p>
									<p>R$ {data.price.toString().replace(".", ',')}</p>
									<p title="Estoque">{data.estoque}</p>
									<p title="Categoria">{data.categoria}</p>
									<p title="Marca">{data.marca}</p>
									<p title="Marca">{data.fornecedor}</p>
								</CardGrid>
							</Card>
						)}
				</div>
			</Container>
		)
	}
}