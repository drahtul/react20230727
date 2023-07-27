import React from 'react'
import Tarjeta from './Tarjeta'

const Tarjetas = ({tareas}) => {
    return (
        <div className="tarjetas">
            {tareas.map(tarea => <Tarjeta key={tarea.id} {...tarea} />)}
        </div>
    )
}

export default Tarjetas