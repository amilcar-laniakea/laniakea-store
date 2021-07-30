/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import Image from '../../Image'

import './style.scss'

const Logo = ({ img }) => {
	return (
		<Link to='/'>
			<Image
				container={'main-logo-white-container'}
				class={'main-logo-white'}
				image={img}
				alt={'Ark Store'}
				title={'ArkStore'}
			/>
		</Link>
	)
}
export default Logo
