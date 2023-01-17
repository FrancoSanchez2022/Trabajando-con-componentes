import React from 'react'
import Dashboard from './Dashboard'


/* import { ReactPropTypes } from 'react' */

function ContentRowMovies() {

	const dash = [
	{	
		id: 1,
		titulo: 'Movies in Data Base',
		color: 'border-left-warning',
		cifra: '21',
		icono: 'fa-film'
	},
	{	
		id: 2,
		titulo: 'Total awards',
		color: 'border-left-success',
		cifra: '79',
		icono: 'fa-award'
	},
	{	
		id: 3,
		titulo: 'Actors quantity',
		color: 'border-left-primary',
		cifra: '49',
		icono: 'fa-user'
	}
	]

	return (
		<div class="container-fluid">

			{dash.map(card => 
				<Dashboard 
				card={card}
				key={card.id}
				id={card.id}
				titulo= {card.titulo}
				color= {card.color}
				cifra= {card.cifra}
				icono= {card.icono}
				/>
			
				)}
				
		</div>

	)
}

export default ContentRowMovies
