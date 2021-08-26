/** @format */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Dropdown, Menu, Spin } from 'antd'
import { DownOutlined, LoadingOutlined } from '@ant-design/icons'

import Image from '../../../Image'

import './style.scss'

const MainMenu = ({ categories }) => {
	const [isVisible, setVisible] = useState(false)

	const handleCloseMenu = (item) => {
		setVisible(item)
	}

	return (
		<>
			<ul className='navbar-menu-main-container'>
				<li className='navbar-menu-item'>
					<Link className='navbar-menu-link' to='/order-historial'>
						Órdenes
					</Link>
				</li>
			</ul>
			<Dropdown
				overlayClassName='navbar-dropdown'
				placement='topCenter'
				onVisibleChange={handleCloseMenu}
				visible={isVisible}
				overlay={
					<Menu className='navbar-menu-container' onClick={() => handleCloseMenu(false)}>
						{categories ? (
							<>
								{categories.map((item, index) => (
									<Menu.Item key={index}>
										<Link
											className='navbar-menu-categories-title'
											to={`/categories/${item.name}`}>
											<Image
												container={'categories-icon-container'}
												class={'categories-icon'}
												image={item.image}
												alt={item.name}
												title={item.name}
											/>
											<span>{item.name}</span>
										</Link>
									</Menu.Item>
								))}
							</>
						) : (
							<Spin indicator={<LoadingOutlined />} className='loading-categories-icon' />
						)}
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
