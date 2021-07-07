/** @format */

import React, { useState, useMemo, createContext, useContext } from 'react'

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

	const value = useMemo(() => {
		return {
			isCartQuantity,
			isModalGeneralInfo,
			isDate,
			HandleModalGeneralInfo,
			HandleAddProductCart,
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isModalGeneralInfo, isDate, isCartQuantity])
	return <AppContext.Provider value={value} {...props} />
}

export const ContextConsumer = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('ContextConsumer debe estar dentro de proveedor AppContext')
	}
	return context
}
