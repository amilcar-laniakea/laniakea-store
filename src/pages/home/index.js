/** @format */

import React from 'react'

import MetaDescription from '../../components/MetaDescription'

import MainBanners from './components/MainBanners'

const Home = () => {
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
					<h3>Inicio</h3>
					<MainBanners
						item={{
							title: 'Seccion de Banners',
							subtitle: 'Componente para Colocar el banner principal',
						}}
					/>
				</div>
			</div>
		</>
	)
}
export default Home
