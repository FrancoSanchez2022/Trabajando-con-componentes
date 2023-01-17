import React from 'react'
import AdicionalTabla from './AdicionalTabla'

function Adicional() {

  const info = [
    {
      id : 1,
      titulo : 'Terminator',
      duracion : '120min',
      rating : '10',
      genero : 'Ciencia Ficción',
      premios : 'Todos'
  },
    {
      id : 2,
      titulo : 'Alien',
      duracion : '110min',
      rating : '11',
      genero : 'Ciencia Ficción, Terror',
      premios : 'Todos y más'
  }
]

  return (
  <div>
    {info.map(celda => 
    <>
				<AdicionalTabla 
/* 				celda={celda}
				key={celda.id}
				id={celda.id} */
				titulo= {celda.titulo}
				duracion= {celda.duracion}
				rating= {celda.rating}
				genero= {celda.genero}
				premios= {celda.premios}
				/>
        </>
			
				)}
    
  </div>
  )
}


export default Adicional


