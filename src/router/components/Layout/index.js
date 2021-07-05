/** @format */

import React from 'react'
import { withRouter } from 'react-router-dom'

const Layout = ({ children }) => {
	return <React.Fragment>{children}</React.Fragment>
}
export default withRouter(Layout)
