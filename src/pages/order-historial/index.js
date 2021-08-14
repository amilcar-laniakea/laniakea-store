/** @format */
import React, { useEffect, useState } from 'react'

import MetaDescription from '../../components/MetaDescription'

import Error from '../../components/Error'
import Loading from '../../components/Loading'

import GetOrders from './services'

import './style.scss'

const OrderHistorial = () => {
	const [isOrders, setOrders] = useState(null)
	const [isValidCategoriesService, setValidCategoriesService] = useState(true)

	useEffect(() => {
		GetOrders().then((response) => {
			if (response) {
				setOrders(response)
			} else {
				setValidCategoriesService(false)
			}
		})
	}, [])

	if (isValidCategoriesService) {
		if (!isOrders) {
			return <Loading />
		} else {
			return (
				<>
					<MetaDescription
						item={{
							title: '¡Historial de Ordenes!',
							name: 'description',
							content: 'Laniakea tienda de imagenes.',
						}}
					/>
					<div className='global-container'>
						<div className='main-container'>
							<h2>Historial de Ordenes:</h2>
							{isOrders.map((item, index) => (
								<div key={index} className='order-historial-list-container'>
									<h3>Orden ID: {item.id}</h3>
									<h3>
										Nombre Completo: {item.user_info.first_name}{' '}
										{item.user_info.last_name}
									</h3>
									<h3>Documento ID: {item.user_info.document_id}</h3>
									<h3>Teléfono: {item.user_info.phone}</h3>
									<h3>Dirección: {item.user_info.address}</h3>
									<h3>Productos Comprados: {item.products_ordered}</h3>
									<h3>Total: ${item.total}</h3>
								</div>
							))}
						</div>
					</div>
				</>
			)
		}
	} else {
		return <Error />
	}
}
export default OrderHistorial
