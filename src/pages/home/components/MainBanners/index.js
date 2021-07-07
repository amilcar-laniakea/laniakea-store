/** @format */

import React, { useState } from 'react'
import AwesomeSwiper from 'react-awesome-swiper'

import CardItems from './components/CardItems'

import './style.scss'

const MainBanners = (props) => {
	const [isConfig] = useState({
		spaceBetween: 0,
		loop: false,
		autoplay: false,
		preloadImages: false,
		lazy: true,
		speed: 500,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: props.carouselItems[0],
				spaceBetween: 0,
			},
			992: {
				slidesPerView: props.carouselItems[1],
				spaceBetween: 0,
			},
			768: {
				slidesPerView: props.carouselItems[2],
				spaceBetween: 0,
			},
			640: {
				slidesPerView: props.carouselItems[3],
				spaceBetween: 0,
			},
		},
	})
	return (
		<>
			<AwesomeSwiper ref={(ref) => ref} config={isConfig}>
				<div className='swiper-wrapper'>
					{props.banners.map((item, index) => (
						<div className='swiper-slide' key={index}>
							<CardItems item={item} />
						</div>
					))}
				</div>
				<div className='swiper-button-prev ph-carousel-prev'></div>
				<div className='swiper-button-next ph-carousel-next'></div>
			</AwesomeSwiper>
		</>
	)
}
export default MainBanners
