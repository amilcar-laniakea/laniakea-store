/** @format */

import React, { useState, useEffect } from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'

import { ContextGlobalConsumer } from '../../context/Global'

import ModalGeneralInfo from '../ModalGeneralInfo'
import Logo from '../Logos/Main'

import MainMenu from './components/MainMenu'
import CartIcon from './components/CartIcon'
import MenuDrawer from './components/MenuDrawer'

import Categories from './services'

import './style.scss'

const NavBar = () => {
	const { isDate, HandleModalGeneralInfo } = ContextGlobalConsumer()
	const [isCategories, setCategories] = useState(null)

	useEffect(() => {
		Categories().then((response) => {
			if (response) {
				setCategories(response)
			}
		})
	}, [])

	return (
		<>
			<div className='navbar-vertical-spacer'></div>
			<div className='navbar-global-container'>
				<div className='navbar-main-container'>
					<div className='navbar-drawer-container'>
						{isCategories && <MenuDrawer categories={isCategories} />}
					</div>
					<Logo
						img={
							'https://firebasestorage.googleapis.com/v0/b/laniakea-coder.appspot.com/o/laniakea-coder%2Fmain-logos%2Fark-store-white.png?alt=media&token=cb0380e4-4649-4308-a662-406a81cad11b'
						}
					/>
					<div className='global-spacer' />
					<div className='navbar-main-menu-container'>
						<MainMenu categories={isCategories} />
					</div>
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
