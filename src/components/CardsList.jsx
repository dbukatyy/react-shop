import React from 'react';
// import { Card } from 'semantic-ui-react';
import Card from './Card';

export default function CardsList({ cards, logs }) {
	const cardsList = cards.map(card =>
		<Card
			key={card.id}
			image={card.image}
			header={card.header}
			description={card.description}
			subscribers={card.subscribers}
			status={card.top}
			handleClick={() => logs(card.id)}
		/>
	)

  return(
		<div className='ui cards'>
			{cardsList}
		</div>
  );
}