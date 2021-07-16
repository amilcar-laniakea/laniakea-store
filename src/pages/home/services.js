/** @format */

import { productList } from '../../assets/data'

const FeaturedCarousel = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productList)
			reject('Error en la consulta')
		}, 2000)
	})
}
export default FeaturedCarousel
