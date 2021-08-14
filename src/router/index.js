/** @format */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'

import Home from '../pages/home'
import Cart from '../pages/cart'
import Categories from '../pages/categories'
import Detail from '../pages/detail'
import OrderHistorial from '../pages/order-historial'
import NotFound from '../pages/not-found'

const Routers = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/categories/:id' component={Categories} />
				<Route exact path='/detail/:id' component={Detail} />
				<Route exact path='/order-historial' component={OrderHistorial} />
				<Route path='*' component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>
)
export default Routers
