/** @format */

import React, { useState, createContext, useContext } from 'react'

const AppContext = createContext()

if (JSON.parse(localStorage.getItem('cart')) === null) {
	localStorage.setItem('cart', JSON.stringify([]))
}

const HandleQuantityProduct = (item) => {
	return item.reduce((data, item) => data + item.quantity, 0)
}

export const ContextGlobalProvider = (props) => {
	const cart = JSON.parse(localStorage.getItem('cart'))
	const [isDate] = useState(new Date().getFullYear())
	const [isModalGeneralInfo, setModalGeneralInfo] = useState(false)
	const [isCart, setCart] = useState(cart)
	const [isCartQuantity, setCartQuantity] = useState(HandleQuantityProduct(cart))

	const HandleModalGeneralInfo = () => {
		setModalGeneralInfo(!isModalGeneralInfo)
	}

	const HandleAddProductCart = (item, data) => {
		let cart = isCart
		const request = isCart.findIndex((index) => {
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
	}

	const value = {
		isCart,
		isCartQuantity,
		isModalGeneralInfo,
		isDate,
		HandleModalGeneralInfo,
		HandleAddProductCart,
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
