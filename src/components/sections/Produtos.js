import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'reactstrap'
import api from '../../api'
import CardGrid from '../CardGrid'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			produtos: [],
			isLoading: false
		}
	}
	getProd = async () => {
		this.setState({isLoading: true})
		await api.getAllProducts().then(produtos => {
			this.setState({
				produtos: produtos.data,
				isLoading: false
			})
		})
	}
	componentWillMount = () => {
		document.title = 'Produtos'
		this.getProd()
	}
	searchProd = async data => {
		this.setState({isLoading: true})
		await api.searchAllProducts(data).then(produtos => {
			this.setState({
				produtos: produtos.data,
				isLoading: false
			})
		})
	}
	render() {
		const {produtos, isLoading} = this.state
		return(
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
								if(valor) {
									this.searchProd(valor)
								} else {
									this.getProd()
								}
							}}
						/>
					</form>
				</div>
				<div className="pt-3">
					{	isLoading ? <p>Carregando...</p>
						: produtos.map(data =>
							<Card color="secondary" className="mb-1" key={data.id}>
								<CardGrid>
									<p><strong><Link to={`produtos/${data.id}`}>{data.produto}</Link></strong></p>
									<p>R$ {data.price.toString().replace(".", ',')}</p>
									<p title="Estoque">{data.estoque}</p>
									<p title="Categoria">{data.categoria}</p>
									<p title="Marca">{data.marca}</p>
								</CardGrid>
							</Card>
					)}
				</div>
			</Container>
		)
	}
}