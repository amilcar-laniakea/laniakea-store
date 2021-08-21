/** @format */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Button, Modal } from 'antd'

import { ContextGlobalConsumer } from '../../context/Global'

import Image from '../../components/Image'
import MetaDescription from '../../components/MetaDescription'
import Spacer from '../../components/Spacer'

import { CartPrice } from '../../components/Hooks/GeneralFuncions'

import CartQuantity from './components/CartQuantity'
import CartDeleteProduct from './components/CartDeleteProduct'
import CartClear from './components/CartClear'
import CheckCartModal from './components/CheckCartModal'

import './style.scss'

const Cart = () => {
	const { isCart, isCartQuantity } = ContextGlobalConsumer()
	const [isVisible, setVisible] = useState(false)
	const [isImage, setImage] = useState(null)

	const handlePreviewImage = (item) => {
		setVisible(true)
		setImage(item)
	}

	if (isCart.length <= 0) {
		return (
			<div className='global-container'>
				<div className='main-container'>
					<h1>No hay productos en su Carrito de compras!</h1>
					<Link to='/'>
						<Button>Ir al Inicio</Button>
					</Link>
				</div>
			</div>
		)
	} else {
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
						<div className='cart-title-container'>
							<h1 className='cart-main-title'>Mis Productos:</h1>
							<Spacer />
							<CartClear />
						</div>
						<div className='cart-checkout-global-container'>
							<div className='cart-checkout-map-container'>
								{isCart.map((item, index) => (
									<div key={index} className='cart-product-global-container'>
										<CartQuantity cart={item} />
										<CartDeleteProduct cart={item} />
										<div className='cart-product-main-container'>
											<div
												className='cart-image-product-global-container'
												onClick={() => handlePreviewImage(item)}>
												<Image
													container={'cart-image-product-main-container'}
													class={'cart-image-product'}
													image={item.image}
													alt={item.title}
													title={item.title}
												/>
											</div>
											<div className='cart-detail-text-global-container'>
												<Link to={`/detail/${item.id}`}>
													<h2 className='cart-detail-title'>
														<span className='cart-detail-span'>Título:</span>{' '}
														{item.title}
													</h2>
												</Link>
												<h3 className='cart-detail-description'>
													<span className='cart-detail-span'>Descripción:</span>{' '}
													{item.description}
												</h3>
												<h3 className='cart-detail-quantity'>
													<span className='cart-detail-span'>Cantidad:</span>{' '}
													{item.quantity}
												</h3>
												<h3 className='cart-detail-stock'>
													<span className='cart-detail-span'>Stock:</span> {item.stock}
												</h3>
												<h3 className='cart-detail-price'>
													<span className='cart-detail-span'>Precio:</span> $
													{item.price}
												</h3>
												<h3 className='cart-detail-amount-price'>
													<span className='cart-detail-span'>
														Precio por {item.quantity} unidades:
													</span>{' '}
													${item.price * item.quantity}
												</h3>
												{item.outStock && (
													<h3 className='cart-product-out-stock'>
														No hay stock suficiente de este producto...
													</h3>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
							<Spacer />
							<div className='cart-payment-global-container'>
								<h2 className='cart-payment-quantity'>
									<span className='cart-payment-span'>Cantidad de productos:</span>{' '}
									{isCartQuantity}
								</h2>
								<h2 className='cart-payment-total-price'>
									<span className='cart-payment-span'>Total general:</span> $
									{CartPrice(isCart)}
								</h2>
								<CheckCartModal cart={isCart} />
							</div>
						</div>
					</div>
				</div>
				<Modal
					wrapClassName='cart-image-modal-global-container'
					maskClosable={true}
					width='1024px'
					centered
					visible={isVisible}
					onCancel={() => setVisible(false)}
					okText='Confirmar'
					cancelButtonProps={{ style: { display: 'none' } }}
					okButtonProps={{ style: { display: 'none' } }}>
					{isImage && (
						<Image
							container={'cart-image-modal-product-container'}
							class={'cart-image-modal-product'}
							image={isImage.image}
							alt={isImage.title}
							title={isImage.title}
						/>
					)}
				</Modal>
			</>
		)
	}
}

export default Cart
