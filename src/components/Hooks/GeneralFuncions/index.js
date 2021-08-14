/** @format */

export const CartPrice = (i) => {
	return i.reduce((o, e) => o + e.price * e.quantity, 0)
}

export const FirtsUppercase = (i) => {
	return i.charAt(0).toUpperCase() + i.slice(1)
}
