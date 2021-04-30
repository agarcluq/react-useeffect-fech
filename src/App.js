import React, { useState, useEffect } from 'react';




export default function App() {
const [mostrar,setMostrar]=useState(true)

  return (
    <div>
    <button onClick={()=> setMostrar(false)}>
    Deja de mostrar
    </button>
    {mostrar ? <MouseColor/> : null}
    </div>
  )

}
function MouseColor (){
  const [color,setColor] = useState("orange")
// Cambia de coor segun la posición del mouse, porque react no sabe nada de esa posición
  useEffect(() => {
    const onMouseMove=(event)=>{
      if(event.clientX < window.innerWidth/2){
        setColor('orange')
      }else{
        setColor('blue')
      }
    }
    // Quiero comprobar que el mouse de mueva y ejecutar dicha function. Esta renderizando cada vez que cambiamos el estado, y renderizando
    window.addEventListener("mousemove",onMouseMove);
    console.log('ejecutando');

    // Limpiar este effect cuando el componente no exista, no este montado. Se ejecuta cuando se desmonta, y cuando hace algo el estado
    //Limpia y ejecuta, si no tiene []
    return () => {
      console.log('limpiando');
          window.removeEventListener("mousemove",onMouseMove)
    }
  },[color]);


  return  <div style={{height: "100vh" ,background:color}}></div>
}

