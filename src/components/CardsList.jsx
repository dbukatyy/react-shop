import React from 'react';
import Card from './Card';

export default function CardsList({ cards, handleToggleCardStatus, handleToggleCardDescription }) {
	const cardsList = cards.map(card =>
		<Card
			key={card.id}
			image={card.image}
			header={card.header}
			description={card.description}
			subscribers={card.subscribers}
			status={card.top}
			handleClick={() => handleToggleCardStatus(card.id)}
			handleToggleCardDescription={(e) => handleToggleCardDescription(e, card.id)}
			full={card.full}
		/>
	)

  return(
		<div className='ui cards'>
			{cardsList}
		</div>
  );
}