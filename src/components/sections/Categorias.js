import React from 'react'
import { Container, Card } from 'reactstrap'
import api from '../../api'
import CardGrid from '../CardGrid'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categorias: [],
			isLoading: false
		}
	}
	getList = async () => {
		this.setState({ isLoading: true })
		await api.getAllCategories().then(categorias => {
			this.setState({
				categorias: categorias.data,
				isLoading: false
			})
		})
	}
	componentWillMount = () => {
		document.title = 'Categorias'
		this.getList()
	}
	render() {
		const { categorias, isLoading } = this.state
		return (
			<Container className="pt-3" fluid>
				<h1 className="main-title">Categorias</h1>
				{isLoading ? <p>Carregando...</p>
					: categorias.map(data =>
						<Card color="secondary" className="mb-1" key={data.id}>
							<CardGrid>
								<p title="Categoria"><strong>{data.categoria}</strong></p>
							</CardGrid>
						</Card>
					)}
			</Container>
		)
	}
}