/** @format */

import React from 'react'

import { Button } from 'antd'

import { ContextConsumer } from '../../context'

const NavBar = () => {
	const { isModalGeneralInfo, HandleModalGeneralInfo } = ContextConsumer()

	return (
		<>
			<h3>Navigation Bar!</h3>
			<h3>{isModalGeneralInfo ? 'activo!' : 'desactivado!'}</h3>
			<Button onClick={HandleModalGeneralInfo}>Modal</Button>
		</>
	)
}

export default NavBar
