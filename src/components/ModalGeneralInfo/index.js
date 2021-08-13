/** @format */

import React from 'react'

import { Modal } from 'antd'

import { ContextGlobalConsumer } from '../../context/Global'

const ModalGeneralInfo = ({ info }) => {
	const { isModalGeneralInfo, HandleModalGeneralInfo } = ContextGlobalConsumer()

	return (
		<Modal
			title={info.title}
			visible={isModalGeneralInfo}
			onOk={HandleModalGeneralInfo}
			onCancel={HandleModalGeneralInfo}>
			<p>{info.subtitle}</p>
			<p>{info.description}</p>
			<p>{info.sub_description}</p>
		</Modal>
	)
}

export default ModalGeneralInfo
