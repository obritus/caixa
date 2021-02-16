import React from 'react'
import { Container } from 'reactstrap'
import { MdCheckCircle } from "react-icons/md"
import styled from 'styled-components'

export const Footer = styled.footer`
	background: rgba(255,255,255,0.07);
	margin: 0;
	padding: 0;
	* {
		margin: 0;
		padding: 0;
	}
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		p {
			padding: 3px 5px;
			svg {
				vertical-align: text-top;
				padding-right: 2pt;
			}
		}
		p:first-child {
			border-right: 1px solid rgba(255,255,255,0.1);
		}
	}
`

export default class extends React.Component {
  render(){
	return ( 
		<Footer className="fixed-bottom">
			<Container fluid className="text-right">
				<p className="text-left">Copyright 2021. Todos os direitos reservados.</p>
				<p className="text-right"><MdCheckCircle/> Conectado ao Banco de dados.</p>
			</Container>
		</Footer>
	)
  }
 }