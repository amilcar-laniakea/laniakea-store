/** @format */

import { productList } from '../../assets/data'

const FilterCategories = (item) => {
	const filterCategories = productList.filter((data) => data.category.name_category === item)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(filterCategories)
			reject('Error en la consulta')
		}, 1000)
	})
}
export default FilterCategories
