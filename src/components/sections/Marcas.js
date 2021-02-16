import React from 'react'
import { Container, Card } from 'reactstrap'
import api from '../../api'
import CardGrid from '../CardGrid'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			marcas: [],
			isLoading: false
		}
	}
	getList = async () => {
		this.setState({ isLoading: true })
		await api.getAllMarcas().then(marcas => {
			this.setState({
				marcas: marcas.data,
				isLoading: false
			})
		})
	}
	componentWillMount = () => {
		document.title = 'Marcas'
		this.getList()
	}
	render() {
		const { marcas, isLoading } = this.state
		return (
			<Container className="pt-3" fluid>
				<h1 className="main-title">Marcas</h1>
				{isLoading ? <p>Carregando...</p>
					: marcas.map(data =>
						<Card color="secondary" className="mb-1" key={data.id}>
							<CardGrid>
								<p title="Marca"><strong>{data.marca}</strong></p>
							</CardGrid>
						</Card>
					)}
			</Container>
		)
	}
}