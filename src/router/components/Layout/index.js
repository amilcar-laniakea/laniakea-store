/** @format */

import React from 'react'
import { withRouter } from 'react-router-dom'

import { ContextProvider } from '../../../context'

import NavBar from '../../../components/NavBar'
import FooterBottom from '../../../components/Footer/Bottom'

const Layout = ({ children }) => {
	return (
		<ContextProvider>
			<NavBar />
			{children}
			<FooterBottom />
		</ContextProvider>
	)
}

export default withRouter(Layout)
