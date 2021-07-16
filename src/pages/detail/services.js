/** @format */

import { productList } from '../../assets/data'

const ProductDetail = (item) => {
	const requestIndexProduct = productList.findIndex((index) => {
		return index.id === item
	})
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productList[requestIndexProduct])
			reject('Error en la consulta')
		}, 2000)
	})
}
export default ProductDetail
