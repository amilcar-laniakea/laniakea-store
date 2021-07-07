/** @format */

import React, { useEffect, useState } from 'react'

import MetaDescription from '../../components/MetaDescription'

import MainBanners from './components/MainBanners'
import MainBannersLoading from './components/MainBannersLoading'

import FeaturedCarousel from './services'

const Home = () => {
	const [isFeaturedBanner, setFeaturedBanner] = useState(null)

	useEffect(() => {
		FeaturedCarousel().then((response) => {
			setFeaturedBanner(response)
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
					{isFeaturedBanner ? (
						<>
							<h3 className='main-title-2'>Imagenes destacadas:</h3>
							<MainBanners carouselItems={[4, 3, 2, 1]} banners={isFeaturedBanner} />
						</>
					) : (
						<MainBannersLoading />
					)}
				</div>
			</div>
		</>
	)
}
export default Home
