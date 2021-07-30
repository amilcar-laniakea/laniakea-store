/** @format */

import { notification } from 'antd'

import { db } from '../../firebase'

const FilterCategories = async (item) => {
	let dataResponse

	const featured = db.collection('laniakea-store-db').where('category.name_category', '==', item)

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
					description: '¡No se encontraron registros!.',
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
export default FilterCategories
