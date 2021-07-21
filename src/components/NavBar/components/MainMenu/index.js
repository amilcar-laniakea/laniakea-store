/** @format */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { mainCategories } from '../../../../assets/categories'

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
						{mainCategories.map((item, index) => (
							<Menu.Item key={index}>
								<Link
									className='navbar-menu-categories-title'
									to={`/categories/${item.name}`}>
									{item.name}
								</Link>
							</Menu.Item>
						))}
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
