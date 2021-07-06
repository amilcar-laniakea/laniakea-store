/** @format */

import React, { useEffect, useState } from 'react'

const Categories = (props) => {
	const [isCategory, setCategory] = useState(null)
	useEffect(() => {
		setCategory(props.match.params.id)
	}, [props.match.params.id])

	return (
		<div className='global-container'>
			<div className='main-container'>{isCategory && <h3>Categoría: {isCategory}</h3>}</div>
		</div>
	)
}

export default Categories
