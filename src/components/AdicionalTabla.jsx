import React from 'react'
import PropTypes from 'prop-types'


function AdicionalTabla({id,titulo,duracion,rating,genero,premios, key}) {
    return (
        <table class="table" /* key={key} */>

            <thead>
                <tr>
                    <th scope="col">TITULO</th>
                    <th scope="col">DURACION</th>
                    <th scope="col">RATING</th>
                    <th scope="col">GENERO</th>
                    <th scope="col">PREMIOS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td scope="row">{titulo}</td>
                    <td>{duracion}</td>
                    <td>{rating}</td>
                    <td>{genero}</td>
                    <td>{premios}</td>
                </tr>
            </tbody>
            
        </table>
    )
}

AdicionalTabla.propTypes = {}

export default AdicionalTabla
