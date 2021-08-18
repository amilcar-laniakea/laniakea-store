/** @format */

import React, { useState } from 'react'

import { Button, Input, Form, notification } from 'antd'

import './style.scss'

const ProductCounter = ({ detail, handleQuantity }) => {
	const [itemsCartForm] = Form.useForm()
	const [isValidDelete, setValidDelete] = useState(true)

	const handleDeleteQuantity = () => {
		let quantity = itemsCartForm.getFieldValue('cart_quantity')
		if (quantity === 1) {
			notification['warning']({
				message: 'Aviso:',
				description: '¡No puedes disminuir la cantidad inferior a un (1) artículo!',
			})
		} else {
			quantity = quantity - 1
			handleQuantity(quantity)
			itemsCartForm.setFieldsValue({
				cart_quantity: quantity,
			})
		}
	}

	const handleAddQuantity = () => {
		let quantity = itemsCartForm.getFieldValue('cart_quantity')
		if (quantity >= detail.stock) {
			notification['warning']({
				message: 'Aviso:',
				description: '¡No puedes agregar mas productos al stock disponible!.',
			})
		} else {
			quantity = quantity + 1
			handleQuantity(quantity)
			itemsCartForm.setFieldsValue({
				cart_quantity: quantity,
			})
		}
		if (isValidDelete) {
			setValidDelete(false)
		}
	}

	return (
		<div className='counter-global-container'>
			<Form
				className='detail-quantity-form-container'
				form={itemsCartForm}
				initialValues={{ cart_quantity: 0 }}>
				<Button
					disabled={detail.stock <= 0 ? true : false || isValidDelete}
					onClick={() => handleDeleteQuantity()}>
					-
				</Button>
				<Form.Item name='cart_quantity'>
					<Input className='detail-quantity-form-input' disabled />
				</Form.Item>
				<Button disabled={detail.stock <= 0 ? true : false} onClick={() => handleAddQuantity()}>
					+
				</Button>
			</Form>
		</div>
	)
}

export default ProductCounter
