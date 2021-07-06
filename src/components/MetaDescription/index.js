/** @format */

import React from 'react'
import { Helmet } from 'react-helmet'

const MetaDescription = ({ item }) => {
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>{item.title}</title>
			<meta name={item.name} content={item.content} />
		</Helmet>
	)
}

export default MetaDescription
