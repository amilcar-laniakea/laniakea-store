/** @format */

import React from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'

import { ContextGlobalConsumer } from '../../context'

import ModalGeneralInfo from '../ModalGeneralInfo'
import Logo from '../Logos/Main'

import MainMenu from './components/MainMenu'
import CartIcon from './components/CartIcon'

import './style.scss'

const NavBar = () => {
	const { isDate, HandleModalGeneralInfo } = ContextGlobalConsumer()

	return (
		<>
			<div className='navbar-vertical-spacer'></div>
			<div className='navbar-global-container'>
				<div className='navbar-main-container'>
					<Logo
						img={
							'https://firebasestorage.googleapis.com/v0/b/laniakea-coder.appspot.com/o/laniakea-coder%2Fmain-logos%2Fark-store-white.png?alt=media&token=cb0380e4-4649-4308-a662-406a81cad11b'
						}
					/>
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
