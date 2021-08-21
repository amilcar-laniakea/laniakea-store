/** @format */

import React, { useState, createContext, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { Button, notification, Row, Col } from 'antd'

import Image from '../../components/Image'

import './style.scss'

const AppContext = createContext()

if (JSON.parse(localStorage.getItem('cart')) === null) {
	localStorage.setItem('cart', JSON.stringify([]))
}

export const ContextGlobalProvider = (props) => {
	const history = useHistory()

	const HandleQuantityProduct = (item) => {
		if (item) {
			return item.reduce((data, item) => data + item.quantity, 0)
		} else {
			return 0
		}
	}

	const cart = JSON.parse(localStorage.getItem('cart'))
	const [isDate] = useState(new Date().getFullYear())
	const [isModalGeneralInfo, setModalGeneralInfo] = useState(false)
	const [isCart, setCart] = useState(cart)
	const [isCartQuantity, setCartQuantity] = useState(HandleQuantityProduct(cart))

	const HandleModalGeneralInfo = () => {
		setModalGeneralInfo(!isModalGeneralInfo)
	}

	const HandleCartLink = () => {
		history.push('/cart')
	}

	const HandleAddProductCart = (item, data, isCartValidate) => {
		let cart = isCart
		const request = cart.findIndex((index) => {
			return index.id === item.id
		})
		if (request === -1) {
			item.quantity = data
			cart.push(item)
		} else {
			cart[request].quantity = cart[request].quantity + data
		}
		localStorage.setItem('cart', JSON.stringify(cart))
		setCart(JSON.parse(localStorage.getItem('cart')))
		setCartQuantity(HandleQuantityProduct(cart))
		if (!isCartValidate) {
			notification['success']({
				key: 1,
				className: 'cart-notification-global-container',
				message: 'Enhorabuena:',
				duration: 5,
				description: (
					<>
						<Row>
							<Col span={6} className='cart-notification-image-global-container'>
								<Image
									container={'cart-notification-image-main-container'}
									class={'cart-notification-image'}
									image={item.image}
									alt={item.title}
									title={item.title}
								/>
							</Col>
							<Col span={18}>
								<div className='cart-notification-text-global-container'>
									<h4 className='cart-notification-main-title'>
										Has agregado un producto a tu bolsa de compras:
									</h4>
									<h4 className='cart-notification-product-name'>
										<span className='cart-nitification-span'>Producto:</span> {item.title}
									</h4>
									<h4 className='cart-notification-product-amount'>
										<span className='cart-nitification-span'>Cantidad:</span> {data}
									</h4>
									<h4 className='cart-notification-product-single-price'>
										<span className='cart-nitification-span'>Precio por unidad:</span> $
										{item.price}
									</h4>
									<h4 className='cart-notification-product-total-price'>
										<span className='cart-nitification-span'>Total:</span> $
										{item.price * data}
									</h4>
								</div>
							</Col>
							<Col span={24}>
								<div className='cart-notification-button-container'>
									<Button
										onClick={() => HandleCartLink()}
										className='cart-notification-button'>
										Ir al Carrito
									</Button>
								</div>
							</Col>
						</Row>
					</>
				),
			})
		}
	}

	const HandleDeleteQuantityItemCart = (item, data) => {
		let cart = isCart
		const request = cart.findIndex((index) => {
			return index.id === item.id
		})
		cart[request].quantity = cart[request].quantity - data
		localStorage.setItem('cart', JSON.stringify(cart))
		setCart(JSON.parse(localStorage.getItem('cart')))
		setCartQuantity(HandleQuantityProduct(cart))
	}

	const HandleDeleteItemCart = (item) => {
		let cart = isCart
		const request = cart.findIndex((index) => {
			return index.id === item.id
		})
		cart.splice(request, 1)
		localStorage.setItem('cart', JSON.stringify(cart))
		setCart(JSON.parse(localStorage.getItem('cart')))
		setCartQuantity(HandleQuantityProduct(cart))
	}

	const HandleClearCart = () => {
		const cart = localStorage.setItem('cart', JSON.stringify([]))
		setCart(JSON.parse(localStorage.getItem('cart')))
		setCartQuantity(HandleQuantityProduct(cart))
	}

	const HandleStockCart = (i) => {
		setCart([...i])
	}

	const value = {
		isCart,
		isCartQuantity,
		isModalGeneralInfo,
		isDate,
		HandleModalGeneralInfo,
		HandleAddProductCart,
		HandleDeleteQuantityItemCart,
		HandleDeleteItemCart,
		HandleClearCart,
		HandleStockCart,
	}
	return <AppContext.Provider value={value} {...props} />
}

export const ContextGlobalConsumer = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('ContextConsumer debe estar dentro de proveedor AppContext')
	}
	return context
}
