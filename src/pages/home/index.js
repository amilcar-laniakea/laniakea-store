/** @format */

import React from 'react'

import MainBanners from './components/MainBanners'

const Home = () => {
	return (
		<div className='global-container'>
			<div className='main-container'>
				<h3>Inicio</h3>
				<MainBanners
					item={{
						title: 'Seccion de Banners',
						subtitle: 'Componente para Colocar el banner principal',
					}}
				/>
			</div>
		</div>
	)
}
export default Home
