/** @format */

import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { Dropdown, Menu, Spin } from 'antd'
import { DownOutlined, LoadingOutlined, InfoCircleOutlined } from '@ant-design/icons'

import Image from '../../../Image'

import Categories from './services'

import './style.scss'

const MainMenu = () => {
	const [isVisible, setVisible] = useState(false)
	const [isCategories, setCategories] = useState(null)
	const [isValidCategoriesService, setValidCategoriesService] = useState(true)

	const handleCloseMenu = (item) => {
		setVisible(item)
	}

	useEffect(() => {
		Categories().then((response) => {
			if (response) {
				setCategories(response)
			} else {
				setValidCategoriesService(false)
			}
		})
	}, [])

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
					<Menu className='navbar-menu-container' onClick={() => handleCloseMenu(false)}>
						{isValidCategoriesService ? (
							<>
								{isCategories ? (
									<>
										{isCategories.map((item, index) => (
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
									<Spin
										indicator={<LoadingOutlined />}
										className='loading-categories-icon'
									/>
								)}
							</>
						) : (
							<div className='error-categories-container'>
								<InfoCircleOutlined className='error-categories-icon' />
								<h3 className='error-categories-title'>Error</h3>
							</div>
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
