/** @format */

import React from 'react'

import { Button } from 'antd'

import { ContextConsumer } from '../../context'

import ModalGeneralInfo from '../ModalGeneralInfo'

const NavBar = () => {
	const { isModalGeneralInfo, isDate, HandleModalGeneralInfo } = ContextConsumer()

	return (
		<>
			<h3>Navigation Bar!</h3>
			<h3>{isModalGeneralInfo ? 'activo!' : 'desactivado!'}</h3>
			<Button onClick={HandleModalGeneralInfo}>Modal</Button>
			<ModalGeneralInfo
				info={{
					title: 'Acerca de:',
					subtitle: 'Amilcar Barahona',
					description: `@${isDate} Coderhouse`,
					sub_description: 'All rights reserved.',
				}}
			/>
		</>
	)
}

export default NavBar
