/** @format */

import React from 'react'

import { Button, notification } from 'antd'

import { ContextGlobalConsumer } from '../../context'

const AddProduct = ({ detail, quantity }) => {
	const { HandleAddProductCart } = ContextGlobalConsumer()

	const handleAddItemCart = (item) => {
		if (quantity <= 0) {
			notification['warning']({
				message: 'Aviso:',
				description: '¡Debes agregar una cantidad para proceder con la compra!.',
			})
		} else {
			HandleAddProductCart(item, quantity)
		}
	}

	return (
		<Button
			disabled={detail.stock <= 0 ? true : false || quantity <= 0}
			onClick={() => handleAddItemCart(detail)}>
			Agregar al carrito
		</Button>
	)
}

export default AddProduct
