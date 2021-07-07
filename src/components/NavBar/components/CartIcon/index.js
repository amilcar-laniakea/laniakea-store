/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import { ShoppingCartOutlined } from '@ant-design/icons'

import { ContextConsumer } from '../../../../context'

import './style.scss'

const CartIcon = () => {
	const { isCartQuantity } = ContextConsumer()
	return (
		<Link to='/cart'>
			<div className='cart-navbar-main-container'>
				<ShoppingCartOutlined className='cart-main-icon' />
				<span className='cart-navbar-quantity'>{isCartQuantity}</span>
			</div>
		</Link>
	)
}

export default CartIcon
