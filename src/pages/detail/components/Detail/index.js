/** @format */

import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import MetaDescription from '../../../../components/MetaDescription'
import Loading from '../../../../components/Loading'
import Image from '../../../../components/Image'
import CounterProduct from '../../../../components/CounterProduct'
import AddProduct from '../../../../components/AddProduct'
import Error from '../../../../components/Error'

import { ContextDetailProductConsumer } from '../../../../context/DetailProduct'

import ProductDetail from './services'

import './style.scss'

const Detail = () => {
	const { isAddedProduct, HandVerifyProductCart } = ContextDetailProductConsumer()
	let { id } = useParams()
	const [isDetail, setDetail] = useState(null)
	const [isQuantity, setQuantity] = useState(0)
	const [isValidDetailService, setValidDetailService] = useState(true)

	const handleQuantity = (item) => {
		setQuantity(item)
	}

	useEffect(() => {
		ProductDetail(id).then((response) => {
			if (response) {
				setDetail(response.detail)
				HandVerifyProductCart(response.inCart)
			} else {
				setValidDetailService(false)
			}
		})
	}, [id, HandVerifyProductCart])

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
					<div className='detail-global-container'>
						<div className='detail-main-container'>
							<Image
								container={'detail-main-image-container'}
								class={'detail-main-image'}
								image={isDetail.image}
								alt={isDetail.title}
								title={isDetail.title}
							/>

							<div className='detail-global-text-container'>
								<div className='detail-main-text-container'>
									<h2 className='detail-title'>{isDetail.title}</h2>
									<h4 className='detail-code-title'>Código: {isDetail.id}</h4>
									<h3 className='detail-description'>{isDetail.description}</h3>
									<h3 className='detail-category'>
										Categoría: {isDetail.category.name_category}
									</h3>
									<h3 className='detail-stock'>Stock: {isDetail.stock}</h3>

									<h2 className='detail-price'>Precio: ${isDetail.price}</h2>
								</div>
								<div className='counter-add-product-container'>
									<CounterProduct
										detail={isDetail}
										handleQuantity={(e) => handleQuantity(e)}
									/>
									{!isAddedProduct ? (
										<AddProduct detail={isDetail} quantity={isQuantity} />
									) : (
										<div className='detail-note-container'>
											<h4 className='detail-note-title'>Nota:</h4>
											<h3 className='detail-note-subtitle'>
												Tiene este producto agregado a su carrito de compras, si desea
												eliminarlo o modificar la cantidad a comprar, haga click{' '}
												<Link className='detail-note-link' to='/cart'>
													aquí
												</Link>
											</h3>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)
		}
	} else {
		return <Error error={'Hubo un error en la consulta, intente más tarde.'} />
	}
}
export default Detail
