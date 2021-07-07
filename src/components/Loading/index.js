/** @format */

import React from 'react'

import Spin from 'antd/lib/spin'
import { LoadingOutlined } from '@ant-design/icons'

import './style.scss'

const Loading = () => {
	return (
		<>
			<div className='loading-general'>
				<Spin indicator={<LoadingOutlined />} className='loading-general-icon' />
			</div>
		</>
	)
}
export default Loading
