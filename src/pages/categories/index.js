/** @format */

import React, { useEffect, useState } from 'react'

import { Row, Col } from 'antd'

import MetaDescription from '../../components/MetaDescription'

import CardItems from '../../components/CardItems'
import Loading from '../../components/Loading'

import FilterCategories from './services'

import './style.scss'

const Categories = (props) => {
	const [isCategory, setCategory] = useState(null)
	useEffect(() => {
		setCategory(null)
		FilterCategories(props.match.params.id).then((response) => {
			setCategory(response)
		})
	}, [props.match.params.id])

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
					<h1 className='categories-main-title'>Categoria: {props.match.params.id}</h1>
				</div>
				<div className='global-container'>
					<div className='main-container'>
						<Row>
							{isCategory.map((item, index) => (
								<Col span={8} key={index} className='categories-card-container'>
									<CardItems item={item} />
								</Col>
							))}
						</Row>
					</div>
				</div>
			</>
		)
	}
}

export default Categories
