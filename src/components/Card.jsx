import React from 'react';
import Link from './Link';
import { Icon, Label } from 'semantic-ui-react'

export default function Card({ header, description, image, subscribers, status, handleClick }) {
	const iconStyle = status ? 'star' : 'star outline';

	return (
		<div className='ui card'>
			<img src={image} className='ui image' />
			<Label corner='right' as='a' onClick={handleClick}>
    		<Icon name={iconStyle} />
  		</Label>
			<div className='content'>
				<div className='header'>{header}</div>
				<div className='description'>{description}</div>
			</div>
			<div className='extra content'>
				<Link icon='user' count={subscribers} />
				<Link icon='eye' />
			</div>
		</div>
	)
}