/** @format */
import React from 'react'

import MetaDescription from '../../components/MetaDescription'

const NotFound = () => {
	return (
		<>
			<MetaDescription
				item={{
					title: '¡Error en Página!',
					name: 'description',
					content: 'Laniakea tienda de imagenes.',
				}}
			/>
			<div className='global-container'>
				<div className='main-container'>
					<h3>Page not found!</h3>
				</div>
			</div>
		</>
	)
}
export default NotFound
