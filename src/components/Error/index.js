/** @format */

import React from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'

import MetaDescription from '../MetaDescription'

import './style.scss'

const Error = ({ error }) => {
	return (
		<>
			<MetaDescription
				item={{
					title: `${`Laniakea - Error`}`,
					name: 'description',
					content: 'Laniakea tienda de imagenes.',
				}}
			/>
			<div className='global-container'>
				<div className='main-container'>
					<div className='error-service-container'>
						<div className='error-service-inner-container'>
							<InfoCircleOutlined className='error-service-icon' />
							<h3 className='error-service-title'>{error}</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Error
