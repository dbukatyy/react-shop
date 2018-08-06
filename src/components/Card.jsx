import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import { NavLink } from 'react-router-dom'
import { Icon, Label, Grid, Button, Divider } from 'semantic-ui-react'

export default function Card({ id, header, description, image, subscribers,
	status, full, handleClick, handleToggleCardDescription, deleteCard }) {

	const iconStyle = status ? 'star' : 'star outline';

	return (
		<div className='ui card'>
			<img src={image} className='ui image' />
			<Label corner='right' as='a' onClick={handleClick}>
    		<Icon name={iconStyle} />
  		</Label>
			<div className='content'>
				<div className='header'>{header}</div>
				<div className='description'>{full && description}</div>
			</div>
			<div className='extra content'>
				<Grid>
					<Grid.Column width={8}>
						<Link icon='user' count={subscribers} />
					</Grid.Column>
					<Grid.Column width={8} style={{'textAlign': 'right'}}>
						<Link icon='eye' handleClick={handleToggleCardDescription}/>
					</Grid.Column>
				</Grid>
				<Divider />
				<Button.Group widths='2'>
					<NavLink className='button ui' to={`/form/${id}`}>
						<Icon name='edit'/>
						Edit
					</NavLink>
					{/* <Button onClick={editCard}>
					</Button> */}
					<Button onClick={deleteCard}>
						<Icon name='trash'/>
						Delete
					</Button>
				</Button.Group>
			</div>
		</div>
	)
}

Card.propTypes = {
	header: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	subscribers: PropTypes.number,
	status: PropTypes.bool,
	full: PropTypes.bool,
	handleClick: PropTypes.func,
	handleToggleCardDescription: PropTypes.func,
	deleteCard: PropTypes.func.isRequired
}

Card.defaultProps = {
	description: 'No info'
}