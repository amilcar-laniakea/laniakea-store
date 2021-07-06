/** @format */
import React from 'react'

const Image = (props) => {
	return (
		<div className={props.container}>
			<img className={props.class} src={props.image} alt={props.title} title={props.title} />
		</div>
	)
}
export default Image
