/** @format */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'

import Home from '../pages/home'
import NotFound from '../pages/not-found'

const Routers = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='*' component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>
)
export default Routers
