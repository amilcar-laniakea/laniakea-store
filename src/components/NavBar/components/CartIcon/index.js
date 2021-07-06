/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import { ShoppingCartOutlined } from '@ant-design/icons'

import './style.scss'

const CartIcon = () => {
	return (
		<Link to='/cart'>
			<ShoppingCartOutlined className='cart-main-icon' />
		</Link>
	)
}

export default CartIcon
