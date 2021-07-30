/** @format */

import { notification } from 'antd'

import { db } from '../../firebase'

const ProductDetail = async (data) => {
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
				dataResponse = array[index]
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
