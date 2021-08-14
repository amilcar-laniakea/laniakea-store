/** @format */

import React, { useState } from 'react'

import { Button, Modal, Form, Input, Row, Col } from 'antd'

import { ContextGlobalConsumer } from '../../../../../../context/Global'

import { Rules } from '../../../../../../components/Hooks/InputRules'

import Payment from './services'

import './style.scss'

const PaymentModal = (props) => {
	const { isCart, isCartQuantity, HandleClearCart } = ContextGlobalConsumer()
	const [paymentForm] = Form.useForm()
	const { TextArea } = Input
	const [isLoading, setLoading] = useState(false)

	const handleSetPayment = async (i) => {
		setLoading(true)
		await Payment(i, isCart, isCartQuantity).then(async (r) => {
			setLoading(false)
			props.handleModalPayment(false)
			if (r) {
				paymentForm.resetFields()
				await HandleClearCart()
			}
		})
	}

	return (
		<>
			<Modal
				wrapClassName=''
				maskClosable={true}
				width='1024px'
				centered
				visible={props.visible}
				onCancel={() => props.handleModalPayment(false)}
				okText='Confirmar'
				cancelButtonProps={{ style: { display: 'none' } }}
				okButtonProps={{ style: { display: 'none' } }}>
				<br />
				<h2>Formulario de Pago:</h2>
				<h4>Complete los siguientes datos para finalizar su pedido</h4>
				<br />
				<Form name='paymentForm' onFinish={handleSetPayment} form={paymentForm}>
					<Row>
						<Col span={12}>
							<h4>Nombre:</h4>
							<Form.Item name={'first_name'} rules={Rules.required}>
								<Input size='large' type='text' placeholder={'Nombre'} />
							</Form.Item>
						</Col>
						<Col span={12}>
							<h4>Apellido:</h4>
							<Form.Item name={'last_name'} rules={Rules.required}>
								<Input size='large' type='text' placeholder={'Apellido'} />
							</Form.Item>
						</Col>
						<Col span={12}>
							<h4>Documento ID:</h4>
							<Form.Item name={'document_id'} rules={Rules.required}>
								<Input size='large' type='text' placeholder={'Documento de Identidad'} />
							</Form.Item>
						</Col>
						<Col span={12}>
							<h4>Teléfono:</h4>
							<Form.Item name={'phone'} rules={Rules.required}>
								<Input size='large' type='text' placeholder={'Teléfono'} />
							</Form.Item>
						</Col>
						<Col span={24}>
							<h4>Dirección:</h4>
							<Form.Item name={'address'} rules={Rules.required}>
								<TextArea size='large' type={'text'} placeholder={'Dirección'} rows={4} />
							</Form.Item>
						</Col>
						<Col span={24}>
							<div className='cart-payment-set-button-container'>
								<Button
									htmlType='submit'
									loading={isLoading}
									className='cart-payment-set-button'>
									PROCESAR PAGO
								</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</Modal>
		</>
	)
}
export default PaymentModal
