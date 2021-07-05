/** @format */

import React from 'react'
import { withRouter } from 'react-router-dom'

import { ContextProvider } from '../../../context'

import NavBar from '../../../components/NavBar'

const Layout = ({ children }) => {
	return (
		<ContextProvider>
			<NavBar />
			{children}
		</ContextProvider>
	)
}

export default withRouter(Layout)
