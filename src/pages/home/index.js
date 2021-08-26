/** @format */

import React, { useEffect, useState } from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'

import MetaDescription from '../../components/MetaDescription'

import MainSlider from './components/MainSlider'
import MainBanners from './components/MainBanners'
import MainBannersLoading from './components/MainBannersLoading'
import AboutSection from './components/AboutSection'

import { FeaturedCarousel, Sliders } from './services'

import './style.scss'

const Home = () => {
	const [isSliders, setSliders] = useState(null)
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
		Sliders().then((response) => {
			if (response) {
				setSliders(response)
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
			{isValidFeaturedService ? (
				<>
					{isSliders && isFeaturedBanner ? (
						<>
							<MainSlider sliders={isSliders} />
							<div className='global-container'>
								<div className='main-container'>
									<h3 className='laniakea-home-main-title'>Imagenes destacadas:</h3>
									<MainBanners carouselItems={[4, 3, 2, 1]} banners={isFeaturedBanner} />
									<h3 className='laniakea-home-main-title'>Acerca de:</h3>
									<AboutSection />
								</div>
							</div>
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
		</>
	)
}
export default Home
