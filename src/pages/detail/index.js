/** @format */

import React from 'react'

import { ContextDetailProductProvider } from '../../context/DetailProduct'

import Detail from './components/Detail'

const PageDetail = () => {
	return (
		<ContextDetailProductProvider>
			<Detail />
		</ContextDetailProductProvider>
	)
}

export default PageDetail
