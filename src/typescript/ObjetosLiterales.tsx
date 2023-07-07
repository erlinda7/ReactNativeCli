import React from 'react'

interface Persona {
    nombreCompleto: string
    edad: number
    direccion: Direccion
}

interface Direccion {
    pais: string
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 615
        }
    }
 
  return (
    <>
    <h3>ObjetosLiterales</h3>
    <code>
        <p>
            {JSON.stringify(persona, null, 2)}
        </p>
    </code>
    </>
  )
}
