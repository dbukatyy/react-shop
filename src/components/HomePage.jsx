import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Container, Menu, Icon } from 'semantic-ui-react';
import App from './App';

const HomePage = () => (
	<Container>
		<Menu>
			<NavLink to='/' className='item'>
				Home
			</NavLink>

			<NavLink to='/form' className='item'>
				<Icon name='plus' size='small'/>
				Add card
			</NavLink>
		</Menu>
		<Route path='/' component={App}/>
	</Container>
)


export default HomePage;