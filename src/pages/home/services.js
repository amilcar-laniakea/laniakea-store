/** @format */

import { productList } from '../../assets/data'

const FeaturedCarousel = () => {
	const featuredCarousel = productList.filter((item) => item.featured)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(featuredCarousel)
			reject('Error en la consulta')
		}, 2000)
	})
}
export default FeaturedCarousel
