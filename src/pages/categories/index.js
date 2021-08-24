/** @format */

import React, { useEffect, useState } from 'react'

import { Row, Col } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import CardItems from '../../components/CardItems'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Image from '../../components/Image'

import FilterCategories from './services'

import './style.scss'

const Categories = (props) => {
	const [isCategory, setCategory] = useState(null)
	const [isValidCategoryService, setValidCategoryService] = useState(true)
	useEffect(() => {
		setValidCategoryService(true)
		setCategory(null)
		FilterCategories(props.match.params.id).then((response) => {
			if (response) {
				setCategory(response)
			} else {
				setValidCategoryService(false)
			}
		})
	}, [props.match.params.id])

	if (isValidCategoryService) {
		if (!isCategory) {
			return <Loading />
		} else {
			return (
				<>
					<MetaDescription
						item={{
							title: `${`Laniakea - ${props.match.params.id}`}`,
							name: 'description',
							content: 'Laniakea tienda de imagenes.',
						}}
					/>
					<div className='categories-main-container'>
						<h1 className='categories-main-title'>Categoría: {props.match.params.id}</h1>
						<Image
							container={'categories-image-container'}
							class={'categories-image'}
							image={isCategory[0].category.image}
							alt={props.match.params.id}
							title={props.match.params.id}
						/>
					</div>
					<div className='global-container'>
						<div className='main-container'>
							<Row>
								{isCategory.map((item, index) => (
									<Col
										xs={24}
										sm={24}
										md={12}
										lg={8}
										xl={8}
										key={index}
										className='categories-card-container'>
										<CardItems item={item} />
									</Col>
								))}
							</Row>
						</div>
					</div>
				</>
			)
		}
	} else {
		return <Error error={'No hay datos para mostrar.'} />
	}
}

export default Categories
