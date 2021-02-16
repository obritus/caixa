import React from 'react'
import { MdAttachMoney, MdAddShoppingCart, MdList, MdSettingsApplications, MdReorder, MdReceipt, MdPermContactCalendar, MdLocationCity } from 'react-icons/md'
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc'
import { NavLink as NavLinkRouter } from 'react-router-dom'
import { Container, NavLink} from 'reactstrap'
import styled from 'styled-components'

export const TopHeader = styled.div`
	height: 30px;
	display: grid;
	grid-template-columns: auto 150px;
	background: rgba(0,0,0,.05);
	color: #CCC;
	font-size: 10pt;
	div:first-child {
		height: 30px;
		user-select: none;
		-webkit-app-region: drag;
		z-index: 7000;
		p {
			transform: translateY(-2px)
		}
	}
	#buttons {
		width: 150px;
		height: 30px;
		button {
			width: 50px;
			height: 30px;
			padding: 0;
			margin: 0;
			background: none;
			border: none;
			color: inherit;
			svg {
				vertical-align: text-top;
			}
			:hover {
				background: rgba(255,255,255,.3);
				cursor: default;
				:last-child {
					background: red;
				}
			}
		}
	}
`
export const Header = styled.header`
	background: rgba(255,255,255,0.07);
`
export const NavMenu = styled.nav`
	display: inline-grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	column-gap: 25px;
	align-items: start;
	padding-bottom: 5pt;
	.nav-link {
		color: #497AA6;
		padding: 0;
		margin: 0;
		text-align: center;
		font-size: 18pt;
		svg {
			vertical-align: text-top;
		}
		span {
			color: #FFF;
			font-size: 12pt;
			padding-left: 5pt;
		}
		:hover {
			cursor: default;
		}
	}
`
export default class extends React.Component {
	constructor(props){
		super(props)
	}
  	render(){
		return (
			<Header className="bg-secondary">
				<TopHeader>
					<div>
						<p className="p-2">Caixa.js</p>
					</div>
					<div id="buttons">
						<button className="btn"><VscChromeMinimize /></button>
						<button className="btn"><VscChromeMaximize /></button>
						<button className="btn"><VscChromeClose /></button>
					</div>
				</TopHeader>
				<Container fluid>
					<NavMenu>
						<NavLinkRouter activeClassName="active" to="/" className="nav-link" title="Venda">
							<MdAddShoppingCart/>
							<span>Venda</span>
						</NavLinkRouter>
						<NavLinkRouter activeClassName="active" to="/produtos" className="nav-link" title="Produtos">
							<MdReorder/>
							<span>Produtos</span>
						</NavLinkRouter>
						<NavLinkRouter activeClassName="active" to="/categorias" className="nav-link" title="Categorias">
							<MdList/>
							<span>Categorias</span>
						</NavLinkRouter>
						<NavLinkRouter activeClassName="active" to="/marcas" className="nav-link" title="Marcas">
							<MdLocationCity/>
							<span>Marcas</span>
						</NavLinkRouter>
						<NavLinkRouter activeClassName="active" to="/fornecedores" className="nav-link" title="Fornecedores">
							<MdPermContactCalendar/>
							<span>Fornecedores</span>
						</NavLinkRouter>
						<NavLinkRouter activeClassName="active" to="/notas" className="nav-link" title="Notas fiscais">
							<MdReceipt />
							<span>Notas</span>
						</NavLinkRouter>
						<NavLinkRouter activeClassName="active" to="/config" className="nav-link" title="Configurações">
							<MdSettingsApplications/>
							<span>Configurações</span>
						</NavLinkRouter>
					</NavMenu>
				</Container>
			</Header>
		)
	}
}