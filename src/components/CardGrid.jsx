import React from 'react'
import styled from 'styled-components'

export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
	font-size: 12pt;
	gap: 12pt;
	p {
		margin: 0;
		padding: 3pt 6pt;
	}
`
export default props =>
	<CardGrid>
		{props.children}
	</CardGrid>