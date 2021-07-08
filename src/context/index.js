/** @format */

import React, { useState, createContext, useContext } from 'react'

const AppContext = createContext()

export const ContextProvider = (props) => {
	const [isDate] = useState(new Date().getFullYear())
	const [isModalGeneralInfo, setModalGeneralInfo] = useState(false)
	const [isCartQuantity, setCartQuantity] = useState(JSON.parse(localStorage.getItem('cart')) || 0)

	const HandleModalGeneralInfo = () => {
		setModalGeneralInfo(!isModalGeneralInfo)
	}

	const HandleAddProductCart = (item) => {
		localStorage.setItem('cart', JSON.stringify(item))
		setCartQuantity(item)
	}

	const value = {
		isCartQuantity,
		isModalGeneralInfo,
		isDate,
		HandleModalGeneralInfo,
		HandleAddProductCart,
	}
	return <AppContext.Provider value={value} {...props} />
}

export const ContextConsumer = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('ContextConsumer debe estar dentro de proveedor AppContext')
	}
	return context
}
