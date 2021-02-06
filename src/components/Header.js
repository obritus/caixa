import React from 'react'
import { MdAttachMoney, MdGroup, MdClose, MdSettings, MdViewModule } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Button, Container, NavLink } from 'reactstrap'
import styled from 'styled-components'

const { ipcRenderer } = window.require('electron')

export const Header = styled.header`
	background: rgba(255,255,255,0.07);
`
export const ConfigBox = styled.div`
	background: #23D962;
	color: #0d0d0d;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	position: absolute;
	z-index: 1100;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: ${props => props.config ? "block" : "none"};
	div.container-fluid {
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 12fr;
		grid-template-rows: 50px auto 50px;
		.btn {
			background: none !important;
			color: #0d0d0d;
			border: none;
		}
	}
`
export const NavMenu = styled.nav`
	display: inline-grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
	column-gap: 25px;
	align-items: start;
	padding-bottom: 25px;
	.nav-link {
		color: #23D962;
		padding: 0;
		margin: 0;
		text-align: center;
		font-size: 40pt;
		span {
			color: #FFF;
			font-size: 8pt;
			display: block;
		}
		:hover {
			cursor: default;
		}
	}
`
export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			config: false
		}
		ipcRenderer.on('open_config', () => {
			this.setState({config: true})
		})
	}
  	render(){
		return (
			<Header>
				<ConfigBox config={this.state.config}>
					<Container fluid>
						<Button
							title="Fechar"
							onClick={() => this.setState({config: false})}
						>
							<MdClose/> {/* Ícone de fechar */}
						</Button>
						<h3>Configurações:</h3>
						<hr/>
					</Container>
				</ConfigBox>
				<Container fluid>
					<NavMenu>
						<Link to="/" className="nav-link" title="Venda">
							<MdAttachMoney/>
							<span>Venda</span>
						</Link>
						<Link to="/produtos" className="nav-link" title="Produtos">
							<MdViewModule/>
							<span>Produtos</span>
						</Link>
						<Link to="/marcas" className="nav-link" title="Marcas">
							<MdGroup/>
							<span>Marcas</span>
						</Link>
						<Link to="/marcas" className="nav-link" title="Marcas">
							<MdGroup/>
							<span>Marcas</span>
						</Link>
						<NavLink onClick={() => this.setState({config: true})} title="Configurações">
							<MdSettings/>
							<span>Configurações</span>
						</NavLink>
					</NavMenu>
				</Container>
			</Header>
		)
	}
}