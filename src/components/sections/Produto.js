import React from 'react'
import { Container } from 'reactstrap'
import api from '../../api'
import Produto from '../Produto'



export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			produto: [],
			isLoading: false
		}
	}
	getProd = async () => {
		this.setState({isLoading: true})
		await api.getProduct(7).then(produto => {
			this.setState({
				produto: produto.data
			})
		})
	}
	componentWillMount = () => {
		this.getProd()
		document.title = 'Produto 123 123'
	}
	render() {
		const {produto, isLoading} = this.state
		console.log(produto)
		return(
			<Container fluid className="pt-3">
				{	isLoading ? <h2 className="text-center">Carregando...</h2>
					: produto.map(data => <Produto data={data} />)
				}
			</Container>
		)
	}
}