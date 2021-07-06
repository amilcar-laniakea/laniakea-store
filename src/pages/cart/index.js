/** @format */

import React from 'react'

import MetaDescription from '../../components/MetaDescription'

const Cart = () => {
	return (
		<>
			<MetaDescription
				item={{
					title: 'Laniakea - Carrito de Compras',
					name: 'description',
					content: 'Laniakea tienda de imagenes.',
				}}
			/>
			<div className='global-container'>
				<div className='main-container'>
					<h3>Carrito de Compras!</h3>
				</div>
			</div>
		</>
	)
}

export default Cart
