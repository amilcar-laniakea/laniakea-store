/** @format */

import React from 'react'

import { Modal } from 'antd'

import { ContextGlobalConsumer } from '../../context/Global'

import './style.scss'

const ModalGeneralInfo = ({ info }) => {
	const { isModalGeneralInfo, HandleModalGeneralInfo } = ContextGlobalConsumer()

	return (
		<Modal
			wrapClassName='general-info-modal'
			title={info.title}
			visible={isModalGeneralInfo}
			onOk={HandleModalGeneralInfo}
			onCancel={HandleModalGeneralInfo}
			cancelButtonProps={{ style: { display: 'none' } }}>
			<h3 className='general-info-modal-title'>{info.subtitle}</h3>
			<h3 className='general-info-modal-title'>{info.description}</h3>
			<h3 className='general-info-modal-title'>{info.sub_description}</h3>
		</Modal>
	)
}

export default ModalGeneralInfo
