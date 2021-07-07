/** @format */

import React from 'react'

import { Link } from 'react-router-dom'

import Image from '../../../../../../components/Image'

import './style.scss'

const MainBanners = ({ item }) => {
	return (
		<Link
			to={`/detail/${item.id}___${item.title}___${item.description}___${item.image.replace(
				/[/]/g,
				'-'
			)}___${item.category}___${item.price}___${item.stock}`}>
			<div className='home-main-banners-card-container'>
				<div className='home-main-banners-card-inner-container'>
					<Image
						container={'home-main-banners-card-image-container'}
						class={'home-main-banners-card-image'}
						image={item.image}
						alt={item.title}
						title={item.title}
					/>
					<div className='home-main-banners-card-description-container'>
						<h3 className='home-main-banners-card-internal-code'>Código:{item.id}</h3>
						<h3 className='home-main-banners-card-category'>Categoría: {item.category}</h3>
						<h3 className='home-main-banners-card-title'>{item.title}</h3>
						<h3 className='home-main-banners-card-price'>${item.price}</h3>
					</div>
				</div>
			</div>
		</Link>
	)
}
export default MainBanners
