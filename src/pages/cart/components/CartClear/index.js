/** @format */

import React, { useState } from 'react'

import { Button, Modal } from 'antd'

import { ExclamationCircleFilled } from '@ant-design/icons'

import { ContextGlobalConsumer } from '../../../../context/Global'

import './style.scss'

const CartClear = () => {
	const { HandleClearCart } = ContextGlobalConsumer()
	const [isVisible, setVisible] = useState(false)

	const handleEmptyCart = () => {
		HandleClearCart()
		setVisible(false)
	}

	return (
		<>
			<Button className='cart-clear-button' onClick={() => setVisible(true)}>
				<ExclamationCircleFilled className='cart-clear-item' />
				Limpiar Carrito
			</Button>
			<Modal
				wrapClassName='cart-clear-modal-container'
				maskClosable={true}
				width='400px'
				centered
				visible={isVisible}
				onCancel={() => setVisible(false)}
				okText='Confirmar'
				cancelButtonProps={{ style: { display: 'none' } }}
				okButtonProps={{ style: { display: 'none' } }}>
				<h3 className='cart-clear-modal-main-title'>
					¿Está seguro que desea vaciar su Carrito de Compras?
				</h3>
				<h4 className='cart-clear-modal-main-subtitle'>*Esta accion es irreversible</h4>
				<Button className='cart-clear-button' onClick={() => handleEmptyCart()}>
					CONFIRMAR
				</Button>
			</Modal>
		</>
	)
}

export default CartClear
