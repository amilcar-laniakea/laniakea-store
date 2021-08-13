/** @format */

import React from 'react'

import { Button, Input, Form, notification } from 'antd'

import { ContextGlobalConsumer } from '../../../../context/Global'

import './style.scss'

const CartQuantity = ({ cart }) => {
	const [form] = Form.useForm()

	const { HandleAddProductCart, HandleDeleteQuantityItemCart } = ContextGlobalConsumer()

	const handleDeleteItemCart = (item) => {
		HandleDeleteQuantityItemCart(item, 1)
		form.setFieldsValue({
			cart_quantity: cart.quantity,
		})
	}

	const handleAddItemCart = (item) => {
		if (item.quantity < item.stock) {
			HandleAddProductCart(item, 1, true)
			form.setFieldsValue({
				cart_quantity: cart.quantity,
			})
		} else {
			notification['warning']({
				message: 'Aviso:',
				description: '¡No puedes agregar mas productos respecto al stock disponible!',
			})
		}
	}

	return (
		<div className='cart-quantity-container'>
			<Button disabled={cart.quantity === 1} onClick={() => handleDeleteItemCart(cart)}>
				-
			</Button>
			<Form
				className='cart-quantity-form'
				initialValues={{ cart_quantity: cart.quantity }}
				form={form}>
				<Form.Item name='cart_quantity'>
					<Input className='detail-quantity-form-input' disabled />
				</Form.Item>
			</Form>
			<Button onClick={() => handleAddItemCart(cart)}>+</Button>
		</div>
	)
}

export default CartQuantity
