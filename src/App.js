import React, {useState, useEffect} from "react"
import Header from "./componentes/Header"
import FormularioTareas from "./componentes/FormularioTareas"
import ListaTareas from "./componentes/ListaTareas"

import "./App.css"


const App = () => {
  
  //Obtenemos las tareas guardadas de local storage
  const tareasGuardadas = 
  localStorage.getItem("tareas") ? 
  JSON.parse(localStorage.getItem("tareas") ) : []

  //Establecemos el estado de las tareas
  const [tareas,cambiarTareas]=useState(tareasGuardadas)

  //Guardando el estado dentro localstorage
  useEffect(()=>{
    localStorage.setItem("tareas",JSON.stringify(tareas))    
  },[tareas])

//Accedemos a logalstorage y comprobar si mostrarcompletadas tiene valor null
  let configMostrarCompletadas=""
  if(localStorage.getItem("mostrarCompletadas")===null){
    configMostrarCompletadas=true;
  } else {
    configMostrarCompletadas=localStorage.getItem("mostrarCompletadas")==="true"
  }

  //El estado de mostrarCompletadas
  const [mostrarCompletadas,cambiarMostrarCompletadas]=useState(configMostrarCompletadas)
  useEffect(()=>{
    localStorage.setItem("mostrarCompletadas",mostrarCompletadas.toString())    
  },[mostrarCompletadas])


  
  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} 
      cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas
       mostrarCompletadas={mostrarCompletadas}
       tareas={tareas} 
       cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
