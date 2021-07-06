/** @format */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import './style.scss'

const MainMenu = () => {
	const [isVisible, setVisible] = useState(false)

	const handleCloseMenu = (item) => {
		setVisible(item)
	}

	return (
		<>
			<ul className='navbar-menu-main-container'>
				<li className='navbar-menu-item'>Nosotros</li>
				<li className='navbar-menu-item'>Productos</li>
			</ul>
			<Dropdown
				overlayClassName='navbar-dropdown'
				placement='topCenter'
				onVisibleChange={handleCloseMenu}
				visible={isVisible}
				overlay={
					<Menu onClick={() => handleCloseMenu(false)}>
						<Menu.Item key='1'>
							<Link to={'/categories/anime'}>Anime</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to={'/categories/ilustrations'}>Ilustraciones</Link>
						</Menu.Item>
						<Menu.Item key='3'>
							<Link to={'/categories/logos'}>Logos</Link>
						</Menu.Item>
					</Menu>
				}
				trigger={['click']}>
				<div className='navbar-menu-categories-button' onClick={(e) => e.preventDefault()}>
					Categorías <DownOutlined />
				</div>
			</Dropdown>
		</>
	)
}

export default MainMenu
