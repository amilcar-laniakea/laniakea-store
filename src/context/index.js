/** @format */

import React, { useState, useMemo, createContext, useContext } from 'react'

const AppContext = createContext()

export const ContextProvider = (props) => {
	const [isModalGeneralInfo, setModalGeneralInfo] = useState(false)

	const HandleModalGeneralInfo = () => {
		setModalGeneralInfo(!isModalGeneralInfo)
	}

	const value = useMemo(() => {
		return {
			isModalGeneralInfo,
			HandleModalGeneralInfo,
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isModalGeneralInfo])
	return <AppContext.Provider value={value} {...props} />
}

export const ContextConsumer = () => {
	const context = useContext(AppContext)
	return context
}
