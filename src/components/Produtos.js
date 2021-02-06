import React from 'react'
import { Spinner, Container, Table } from 'reactstrap'
import api from '../api'

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
					<Table striped>
						<thead>
							<tr>
								<th>Produto</th>
								<th>Preço</th>
								<th>Categoria</th>
								<th>Marca</th>
							</tr>
						</thead>
						<tbody>
					{	isLoading ? <Spinner className="loading" style={{ width: '3rem', height: '3rem' }} />
						: produtos.map(data =>
							<tr>
								<td>{data.produto}</td>
								<td>R$ {data.price.toString().replace(".", ',')}</td>
								<td>{data.categoria}</td>
								<td>{data.marca}</td>
							</tr>
					)}
						</tbody>
					</Table>
				</div>
			</Container>
		)
	}
}