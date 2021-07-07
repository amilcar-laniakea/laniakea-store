/** @format */

import { productFeatured } from './data'

const FeaturedCarousel = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productFeatured)
			reject('Error en la consulta')
		}, 3000)
	})
}
export default FeaturedCarousel
