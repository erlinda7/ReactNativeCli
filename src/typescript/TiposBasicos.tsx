import React from 'react'

export const TiposBasicos = () => {

    const nombre: string ="Erlinda"
    const edad: number = 35
    const estadoActivo: boolean = true
    const poderes: string[] = ['velocidad','Volar', 'Respirar en el agua']
  return (
    <>
        <h3>TiposBasicos</h3>
        {nombre}, {edad}, ¨{(estadoActivo) ? 'activo' : 'no activo'}
        <br></br>
        {poderes.join(', ')}
    </>
  )
}
