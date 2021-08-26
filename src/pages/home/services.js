/** @format */

import { notification } from 'antd'

import { db } from '../../firebase'

export const FeaturedCarousel = async () => {
	let dataResponse

	const featured = db.collection('laniakea-store-db').where('featured', '==', true)

	await featured
		.get()
		.then((r) => {
			if (r.docs.length > 0) {
				let array = []
				r.docs.map((item) => {
					return array.push({ ...item.data(), id: item.id })
				})
				dataResponse = array
			} else {
				notification['warning']({
					message: 'Aviso:',
					description: '¡Error en Servicio de Firebase!.',
				})
			}
		})
		.catch(() => {
			notification['error']({
				message: 'Aviso:',
				description: '¡Revisa tu servicio de internet!.',
			})
		})
	return dataResponse
}

export const Sliders = async () => {
	let dataResponse

	const slider = db.collection('laniakea-slider')

	await slider
		.get()
		.then((r) => {
			if (r.docs.length > 0) {
				let array = []
				r.docs.map((item) => {
					return array.push({ ...item.data(), id: item.id })
				})
				dataResponse = array
			} else {
				notification['warning']({
					message: 'Aviso:',
					description: '¡Error en Servicio de Firebase!.',
				})
			}
		})
		.catch(() => {
			notification['error']({
				message: 'Aviso:',
				description: '¡Revisa tu servicio de internet!.',
			})
		})
	return dataResponse
}
