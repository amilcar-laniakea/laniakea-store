/** @format */

import React, { useState } from 'react'

import { Button, Modal } from 'antd'

import { Link } from 'react-router-dom'

import Image from '../../components/Image'
import MetaDescription from '../../components/MetaDescription'
import Spacer from '../../components/Spacer'

import { ContextGlobalConsumer } from '../../context'

import CartQuantity from './components/CartQuantity'
import CartDeleteProduct from './components/CartDeleteProduct'
import CartClear from './components/CartClear'

import './style.scss'

const Cart = () => {
	const { isCart, isCartQuantity } = ContextGlobalConsumer()
	const [isVisible, setVisible] = useState(false)
	const [isImage, setImage] = useState(null)

	const handlePriceCart = (item) => {
		return item.reduce((data, element) => data + element.price * element.quantity, 0)
	}

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
						{isCart.map((item, index) => (
							<div key={index} className='cart-product-container'>
								<CartQuantity cart={item} />
								<CartDeleteProduct cart={item} />
								<div onClick={() => handlePreviewImage(item)}>
									<Image
										container={'cart-image-product-container'}
										class={'cart-image-product'}
										image={item.image}
										alt={item.title}
										title={item.title}
									/>
								</div>
								<h3>Título: {item.title}</h3>
								<h3>Descripción: {item.description}</h3>
								<h3>Cantidad: {item.quantity}</h3>
								<h3>Stock: {item.stock}</h3>
								<h3>Precio: ${item.price}</h3>
								<h3>
									Precio por {item.quantity} unidades: ${item.price * item.quantity}
								</h3>
							</div>
						))}
						<h2>CANTIDAD DE PRODUCTOS: {isCartQuantity}</h2>
						<h1>TOTAL GENERAL: ${handlePriceCart(isCart)}</h1>
					</div>
				</div>
				<Modal
					wrapClassName=''
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
