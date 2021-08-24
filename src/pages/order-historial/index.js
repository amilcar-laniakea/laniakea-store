/** @format */
import React, { useEffect, useState } from 'react'

import MetaDescription from '../../components/MetaDescription'
import Image from '../../components/Image'

import { Row, Col } from 'antd'

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
				console.log(isOrders),
				(
					<>
						<MetaDescription
							item={{
								title: '¡Historial de ordenes!',
								name: 'description',
								content: 'Laniakea tienda de imagenes.',
							}}
						/>
						<div className='global-container'>
							<div className='main-container'>
								<h2 className='laniakea-main-title-global'>Historial de ordenes:</h2>
								{isOrders.map((item, index) => (
									<div key={index} className='order-historial-list-container'>
										<div className='order-historial-list-text-container'>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>Orden ID:</span>{' '}
												{item.id}
											</h3>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>
													Nombre Completo:
												</span>{' '}
												{item.user_info.first_name} {item.user_info.last_name}
											</h3>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>Documento ID:</span>{' '}
												{item.user_info.document_id}
											</h3>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>Teléfono:</span>{' '}
												{item.user_info.phone}
											</h3>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>Dirección:</span>{' '}
												{item.user_info.address}
											</h3>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>
													Productos Comprados:
												</span>{' '}
												{item.products_ordered}
											</h3>
										</div>

										{item.cart_items.map((element, i) => (
											<div key={i} className='order-historial-list-cart-container'>
												<Row>
													<Col xs={24} sm={24} md={24} lg={5} xl={5}>
														<Image
															container={'order-historial-list-cart-image-container'}
															class={'order-historial-list-cart-image'}
															image={element.image}
															alt={element.title}
															title={element.title}
														/>
													</Col>
													<Col xs={24} sm={24} md={24} lg={19} xl={19}>
														<div className='order-historial-list-cart-text-container'>
															<h4 className='order-historial-list-cart-title'>
																<span className='order-historial-list-span'>
																	ID:
																</span>{' '}
																{element.id}
															</h4>
															<h4 className='order-historial-list-cart-title'>
																<span className='order-historial-list-span'>
																	Artículo:
																</span>{' '}
																{element.title}
															</h4>
															<h4 className='order-historial-list-cart-title'>
																<span className='order-historial-list-span'>
																	Cantidad:
																</span>{' '}
																{element.quantity}
															</h4>
															<h4 className='order-historial-list-cart-title'>
																<span className='order-historial-list-span'>
																	Precio por unidad:
																</span>{' '}
																${element.price}
															</h4>
														</div>
													</Col>
												</Row>
											</div>
										))}
										<div className='order-historial-list-text-container'>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>Total:</span> $
												{item.total}
											</h3>
											<h3 className='order-historial-list-title'>
												<span className='order-historial-list-span'>
													Fecha de Compra:
												</span>{' '}
												{item.fecha}
											</h3>
										</div>
									</div>
								))}
							</div>
						</div>
					</>
				)
			)
		}
	} else {
		return <Error />
	}
}
export default OrderHistorial
