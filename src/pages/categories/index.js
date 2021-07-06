/** @format */

import React, { useEffect, useState } from 'react'

import MetaDescription from '../../components/MetaDescription'

const Categories = (props) => {
	const [isCategory, setCategory] = useState(null)
	useEffect(() => {
		setCategory(props.match.params.id)
	}, [props.match.params.id])

	return (
		<>
			<MetaDescription
				item={{
					title: `${isCategory ? `Laniakea - ${isCategory}` : 'Laniakea'}`,
					name: 'description',
					content: 'Laniakea tienda de imagenes.',
				}}
			/>
			<div className='global-container'>
				<div className='main-container'>{isCategory && <h3>Categoría: {isCategory}</h3>}</div>
			</div>
		</>
	)
}

export default Categories
