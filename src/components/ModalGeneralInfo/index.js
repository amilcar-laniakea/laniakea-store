/** @format */

import React from 'react'

import { Modal } from 'antd'

import { ContextConsumer } from '../../context'

const ModalGeneralInfo = ({ info }) => {
	const { isModalGeneralInfo, HandleModalGeneralInfo } = ContextConsumer()

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
