import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons'

const Tarea = ({tarea,toggleCompletada,editarTarea,borrarTarea}) => {
    const [editandoTarea, cambiarEditandoTarea]=useState(false)
    const [nuevaTarea,cambiarNuevaTarea]=useState(tarea.texto)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        editarTarea(tarea.id,nuevaTarea)
        cambiarEditandoTarea(false)
    }

    
    return ( 
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare:faSquare}
            onClick={()=>toggleCompletada(tarea.id)}
            className="lista-tareas__icono .lista-tareas__icono-check"
            />
            <div className="lista-tareas__texto">
                {editandoTarea ? 
                <form onSubmit={handleSubmit} className="formulario-editar-tarea">
                    <input type="text" 
                    className="formulario-editar-tarea__input"
                    value={nuevaTarea}
                    onChange={(e)=>cambiarNuevaTarea(e.target.value)}                    
                    />
                    <button type="submit" 
                    className="formulario-editar-tarea__btn"
                    >Actualizar</button>
                </form>
                : tarea.texto
                }
            </div>     

            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon icon={faEdit}
                className="lista-tareas__icono lista-tareas__icono-accion"
                onClick={()=>cambiarEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon icon={faTimes}
                onClick={()=>borrarTarea(tarea.id)}
                className="lista-tareas__icono lista-tareas__icono-accion"
                />
            </div> 
        </li>
     );
}
 
export default Tarea;