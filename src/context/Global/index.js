/** @format */

import React, { useState, createContext, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { Button, notification } from 'antd'

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
				message: 'Enhorabuena:',
				duration: 5,
				description: (
					<>
						<h4>Has agregado un producto a tu bolsa de compras:</h4>
						<h4>{`Producto: ${item.title}`}</h4>
						<h4>{`Cantidad: ${data}`}</h4>
						<h4>{`Precio por Unidad: $${item.price}`}</h4>
						<h4>{`Total: $${item.price * data}`}</h4>
						<div className='cart-notification-button-container'>
							<Button onClick={() => HandleCartLink()} className='cart-notification-button'>
								Ir al Carrito
							</Button>
						</div>
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
