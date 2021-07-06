/** @format */

import React from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'

import { ContextConsumer } from '../../context'

import ModalGeneralInfo from '../ModalGeneralInfo'
import LogoWhite from '../Logos/Main'

import MainMenu from './components/MainMenu'
import CartIcon from './components/CartIcon'

import './style.scss'

const NavBar = () => {
	const { isDate, HandleModalGeneralInfo } = ContextConsumer()

	return (
		<>
			<div className='navbar-vertical-spacer'></div>
			<div className='navbar-global-container'>
				<div className='navbar-main-container'>
					<LogoWhite />
					<div className='global-spacer' />
					<MainMenu />
					<CartIcon />
					<InfoCircleOutlined className='navbar-info-help' onClick={HandleModalGeneralInfo} />
				</div>
			</div>
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
