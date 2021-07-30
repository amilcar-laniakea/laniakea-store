/** @format */

import React, { useEffect, useState } from 'react'

import MetaDescription from '../../components/MetaDescription'
import Loading from '../../components/Loading'
import Image from '../../components/Image'
import CounterProduct from '../../components/CounterProduct'
import AddProduct from '../../components/AddProduct'
import Error from '../../components/Error'

import ProductDetail from './services'

import './style.scss'

const ItemDetail = (props) => {
	const [isDetail, setDetail] = useState(null)
	const [isQuantity, setQuantity] = useState(0)
	const [isValidDetailService, setValidDetailService] = useState(true)

	const handleQuantity = (item) => {
		setQuantity(item)
	}

	useEffect(() => {
		ProductDetail(props.match.params.id).then((response) => {
			if (response) {
				setDetail(response)
			} else {
				setValidDetailService(false)
			}
		})
	}, [props.match.params.id])

	if (isValidDetailService) {
		if (!isDetail) {
			return <Loading />
		} else {
			return (
				<>
					<MetaDescription
						item={{
							title: `Laniakea - ${isDetail.title}`,
							name: 'description',
							content: 'Laniakea tienda de imagenes.',
						}}
					/>
					<div className='global-container'>
						<div className='main-container'>
							<Image
								container={'detail-main-image-container'}
								class={'detail-main-image'}
								image={isDetail.image}
								alt={isDetail.title}
								title={isDetail.title}
							/>
							<div>
								<h4>Código: {isDetail.id}</h4>
								<h2>{isDetail.title}</h2>
								<h3>{isDetail.description}</h3>
								<h3>Stock: {isDetail.stock}</h3>
								<h3>Categoría: {isDetail.category.name_category}</h3>
								{isDetail.interface.promotion && (
									<h3 className='detail-promotion-title'>
										Promoción: {isDetail.interface.promotion.name}
									</h3>
								)}
								<h1>Precio: ${isDetail.price}</h1>
							</div>
							<CounterProduct detail={isDetail} handleQuantity={(e) => handleQuantity(e)} />
							<AddProduct detail={isDetail} quantity={isQuantity} />
						</div>
					</div>
				</>
			)
		}
	} else {
		return <Error error={'Hubo un error en la consulta, intente más tarde.'} />
	}
}
export default ItemDetail
