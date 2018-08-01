import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import { Icon, Label } from 'semantic-ui-react'

export default function Card({ header, description, image, subscribers, status, full, handleClick, handleToggleCardDescription }) {
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
				<Link icon='user' count={subscribers} />
				<Link icon='eye' handleClick={handleToggleCardDescription}/>
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
	handleToggleCardDescription: PropTypes.func
}

Card.defaultProps = {
	description: 'No info'
}