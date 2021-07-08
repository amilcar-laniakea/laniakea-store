/** @format */

import React, { useEffect, useState } from 'react'

import { Button, Input, Form, notification } from 'antd'

import MetaDescription from '../../components/MetaDescription'
import Loading from '../../components/Loading'
import Image from '../../components/Image'

import { ContextGlobalConsumer } from '../../context'

import './style.scss'

const ItemDetail = (props) => {
	const { isCartQuantity, HandleAddProductCart } = ContextGlobalConsumer()
	const [itemsCartForm] = Form.useForm()
	const [isDetail, setDetail] = useState(null)

	const handleDeleteQuantity = () => {
		const quantity = itemsCartForm.getFieldValue('cart_quantity')
		if (quantity === 1) {
			notification['warning']({
				message: 'Aviso:',
				description: '¡No puedes disminuir la cantidad inferior a un (1) artículo!.',
			})
		} else {
			itemsCartForm.setFieldsValue({
				cart_quantity: quantity - 1,
			})
		}
	}

	const handleAddQuantity = () => {
		const quantity = itemsCartForm.getFieldValue('cart_quantity')
		if (quantity >= isDetail.stock) {
			notification['warning']({
				message: 'Aviso:',
				description: '¡No puedes agregar mas productos al stock disponible!.',
			})
		} else {
			itemsCartForm.setFieldsValue({
				cart_quantity: quantity + 1,
			})
		}
	}

	const handleAddItemCart = () => {
		const quantity = itemsCartForm.getFieldValue('cart_quantity')
		HandleAddProductCart(isCartQuantity + quantity)
	}

	useEffect(() => {
		const data = props.match.params.id.split('___')
		const detail = {
			id: data[0],
			title: data[1],
			description: data[2],
			image: data[3].replace(/[-]/g, '/'),
			category: data[4],
			price: data[5],
			stock: data[6],
		}
		setDetail(detail)
	}, [props.match.params.id])

	if (!isDetail) {
		return <Loading />
	} else {
		return (
			<>
				<MetaDescription
					item={{
						title: `Laniakea - ${isDetail.title}`,
						name: 'description',
						content: 'Laniakea tienda de imagenes.',
					}}
				/>
				<div className='global-container'>
					<div className='main-container'>
						<Image
							container={'detail-main-image-container'}
							class={'detail-main-image'}
							image={isDetail.image}
							alt={isDetail.title}
							title={isDetail.title}
						/>
						<div>
							<h4>Código: {isDetail.id}</h4>
							<h2>{isDetail.title}</h2>
							<h3>{isDetail.description}</h3>
							<h3>Stock: {isDetail.stock}</h3>
							<h3>Categoría: {isDetail.category}</h3>
							<h1>Precio: ${isDetail.price}</h1>
						</div>
						<div>
							<Form
								className='detail-quantity-form-container'
								form={itemsCartForm}
								initialValues={{ cart_quantity: 1 }}>
								<Button
									disabled={isDetail.stock <= 0 ? true : false}
									onClick={() => handleDeleteQuantity()}>
									-
								</Button>
								<Form.Item name='cart_quantity'>
									<Input className='detail-quantity-form-input' disabled />
								</Form.Item>
								<Button
									disabled={isDetail.stock <= 0 ? true : false}
									onClick={() => handleAddQuantity()}>
									+
								</Button>
							</Form>
							<Button
								disabled={isDetail.stock <= 0 ? true : false}
								onClick={() => handleAddItemCart()}>
								Agregar al carrito
							</Button>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default ItemDetail
