import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function CardsList({ cards, handleToggleCardStatus, handleToggleCardDescription, editCard, delCard }) {
	const cardsList = cards.map(card =>
		<Card
			key={card.id}
			image={card.image}
			header={card.header}
			description={card.description}
			subscribers={+card.subscribers}
			status={card.top}
			handleClick={() => handleToggleCardStatus(card.id)}
			handleToggleCardDescription={(e) => handleToggleCardDescription(e, card.id)}
			editCard={() => editCard(card.id)}
			deleteCard={() => delCard(card.id)}
			full={card.full}
		/>
	)

  return(
		<div className='ui cards centered'>
			{cardsList}
		</div>
  );
}

CardsList.propTypes = {
	cards: PropTypes.array.isRequired,
	handleToggleCardStatus: PropTypes.func.isRequired,
	handleToggleCardDescription: PropTypes.func.isRequired,
	editCard: PropTypes.func.isRequired,
	delCard: PropTypes.func.isRequired
}