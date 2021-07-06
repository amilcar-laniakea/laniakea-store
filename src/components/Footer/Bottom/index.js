/** @format */

import React from 'react'

import './style.scss'

import { ContextConsumer } from '../../../context'

const FooterBottom = () => {
	const { isDate, HandleModalGeneralInfo } = ContextConsumer()
	return (
		<div className='footer-global-container'>
			<div className='footer-main-container'>
				<h3 className='footer-title'>
					@{isDate}{' '}
					<span onClick={HandleModalGeneralInfo} className='footer-subtitle'>
						Amilcar Barahona
					</span>
				</h3>
			</div>
		</div>
	)
}

export default FooterBottom
