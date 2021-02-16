import React from 'react'
import { Container, Card } from 'reactstrap'
import api from '../../api'
import CardGrid from '../CardGrid'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fornecedores: [],
			isLoading: false
		}
	}
	getList = async () => {
		this.setState({ isLoading: true })
		await api.getAllFornecedores().then(fornecedores => {
			this.setState({
				fornecedores: fornecedores.data,
				isLoading: false
			})
		})
	}
	componentWillMount = () => {
		document.title = 'Fornecedores'
		this.getList()
	}
	render() {
		const { fornecedores, isLoading } = this.state
		return (
			<Container className="pt-3" fluid>
				<h1 className="main-title">Fornecedores</h1>
				{isLoading ? <p>Carregando...</p>
					: fornecedores.map(data =>
						<Card color="secondary" className="mb-1" key={data.id}>
							<CardGrid>
								<p title="Fornecedor"><strong>{data.fornecedor}</strong></p>
							</CardGrid>
						</Card>
					)}
			</Container>
		)
	}
}