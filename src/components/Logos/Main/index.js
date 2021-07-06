/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import Image from '../../Image'

import imgLogo from '../../../assets/img/ark-store-white.png'

import './style.scss'

const Logo = () => {
	return (
		<Link to='/'>
			<Image
				container={'main-logo-white-container'}
				class={'main-logo-white'}
				image={imgLogo}
				alt={'Ark Store'}
				title={'ArkStore'}
			/>
		</Link>
	)
}
export default Logo
