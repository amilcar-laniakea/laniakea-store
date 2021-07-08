/** @format */

import React from 'react'
import { withRouter } from 'react-router-dom'

import { ContextGlobalProvider } from '../../../context'

import NavBar from '../../../components/NavBar'
import FooterBottom from '../../../components/Footer/Bottom'

const Layout = ({ children }) => {
	return (
		<ContextGlobalProvider>
			<NavBar />
			{children}
			<FooterBottom />
		</ContextGlobalProvider>
	)
}

export default withRouter(Layout)
