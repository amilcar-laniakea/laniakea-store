/** @format */

import { notification } from 'antd'

import { db } from '../../../../firebase'

const ProductDetail = async (data) => {
	const cart = JSON.parse(localStorage.getItem('cart'))
	let dataResponse

	const detail = db.collection('laniakea-store-db')

	await detail
		.get()
		.then((r) => {
			if (r.docs.length > 0) {
				let array = []
				r.docs.map((item) => {
					return array.push({ ...item.data(), id: item.id })
				})
				const index = array.findIndex((i) => {
					return i.id === data
				})
				let product = { ...array[index] }
				let validateProduct
				if (cart.length > 0) {
					cart.forEach((e) => {
						if (e.id === product.id) {
							product.stock = product.stock - e.quantity
							validateProduct = true
						}
					})
				}
				dataResponse = { detail: product, inCart: validateProduct }
			} else {
				notification['warning']({
					message: 'Aviso:',
					description: '¡Error, Registro no encontrado ó problemas con la consulta!.',
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
export default ProductDetail
