import React, { useState, useEffect } from 'react';




export default function App() {
const [mostrar,setMostrar]=useState(true)

  return (
    <div>
    <button onClick={()=> setMostrar(false)}>
    Deja de mostrar
    </button>
    <p>{mostrar ? <MouseColor/> : null}</p>
    </div>
  )

}
function MouseColor (){
  const [color,setColor] = useState("orange")

  useEffect(() => {
    
  })
  console.log('error')
  return  <div style={{height: "100vh" ,background:color}}></div>
}

