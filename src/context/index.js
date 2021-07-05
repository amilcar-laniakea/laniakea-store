/** @format */

import React, { useState, useMemo, createContext, useContext } from 'react'

const AppContext = createContext()

export const ContextProvider = (props) => {
	const [isDate] = useState(new Date().getFullYear())
	const [isModalGeneralInfo, setModalGeneralInfo] = useState(false)

	const HandleModalGeneralInfo = () => {
		setModalGeneralInfo(!isModalGeneralInfo)
	}

	const value = useMemo(() => {
		return {
			isModalGeneralInfo,
			isDate,
			HandleModalGeneralInfo,
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isModalGeneralInfo, isDate])
	return <AppContext.Provider value={value} {...props} />
}

export const ContextConsumer = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('ContextConsumer debe estar dentro de proveedor AppContext')
	}
	return context
}
