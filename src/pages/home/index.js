/** @format */

import React, { useEffect, useState } from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'

import MetaDescription from '../../components/MetaDescription'

import MainBanners from './components/MainBanners'
import MainBannersLoading from './components/MainBannersLoading'

import FeaturedCarousel from './services'

import './style.scss'

const Home = () => {
	const [isFeaturedBanner, setFeaturedBanner] = useState(null)
	const [isValidFeaturedService, setValidFeaturedService] = useState(true)

	useEffect(() => {
		FeaturedCarousel().then((response) => {
			if (response) {
				setFeaturedBanner(response)
			} else {
				setValidFeaturedService(false)
			}
		})
	}, [])

	return (
		<>
			<MetaDescription
				item={{
					title: 'Laniakea - Inicio',
					name: 'description',
					content: 'Laniakea tienda de imagenes.',
				}}
			/>
			<div className='global-container'>
				<div className='main-container'>
					{isValidFeaturedService ? (
						<>
							{isFeaturedBanner ? (
								<>
									<h3 className='laniakea-main-title-global'>Imagenes destacadas:</h3>
									<MainBanners carouselItems={[4, 3, 2, 1]} banners={isFeaturedBanner} />
								</>
							) : (
								<MainBannersLoading />
							)}
						</>
					) : (
						<div className='home-error-service-container'>
							<InfoCircleOutlined className='home-error-service-icon' />
							<h1 className='home-error-service-title'>Hubo un error en la consulta.</h1>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default Home
