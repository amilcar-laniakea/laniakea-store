/** @format */

import React, { useState } from 'react'

import { Button, Modal, Spin } from 'antd'

import { LoadingOutlined, CheckCircleFilled } from '@ant-design/icons'

import CheckCart from './services'

import { ContextGlobalConsumer } from '../../../../context/Global'

import PaymentModal from './components/PaymentModal'

import './style.scss'

const CheckCartModal = ({ cart }) => {
	const { HandleStockCart } = ContextGlobalConsumer()
	const [isVisible, setVisible] = useState(false)
	const [isModalPayment, setModalPayment] = useState(false)

	const handlePayment = async () => {
		setVisible(true)
		await CheckCart(cart).then((r) => {
			if (r.outStock) {
				HandleStockCart(r.cart)
			} else {
				setModalPayment(true)
			}
		})
		setVisible(false)
	}

	return (
		<>
			<PaymentModal visible={isModalPayment} handleModalPayment={(e) => setModalPayment(e)} />
			<Button
				loading={isVisible}
				className='cart-payment-button'
				onClick={() => handlePayment()}>
				<CheckCircleFilled className='cart-clear-item' />
				Pagar
			</Button>
			<Modal
				wrapClassName='cart-clear-modal-container'
				maskClosable={false}
				width='400px'
				centered
				closable={false}
				visible={isVisible}
				onCancel={() => setVisible(false)}
				okText='Confirmar'
				cancelButtonProps={{ style: { display: 'none' } }}
				okButtonProps={{ style: { display: 'none' } }}>
				<h3 className='cart-clear-modal-main-title'>Comprobando su carrito de compras...</h3>
				<h4 className='cart-clear-modal-main-subtitle'>*No cierre el navegador</h4>
				<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
			</Modal>
		</>
	)
}
export default CheckCartModal
