import React from 'react'
import PropTypes from 'prop-types'

function Dashboard({titulo, color, cifra, icono, id, key}) {
    return (

        <div className="row" key={key}>
        <div className="col-md-4 mb-4">
            <div className={`card ${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}
Dashboard.propTypes = {
    id : PropTypes.number,
    key : PropTypes.string,
    titulo : PropTypes.string,
    color: PropTypes.string,
    cifra: PropTypes.string,
    icono: PropTypes.string,
}
Dashboard.defaultProp = {
    id : 1,
    key : 'key',
    titulo : 'Movies in Data Base',
    color: 'border-left-warning',
    cifra: '21',
    icono: 'fa-film',
}
export default Dashboard