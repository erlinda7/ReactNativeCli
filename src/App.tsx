import React from 'react'
import { Usuarios } from './components/Usuarios';
// import { Funciones } from './typescript/Funciones';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { Contador } from './components/Contador';
// import { ContadorConHook } from './components/ContadorConHook';
// import { Login } from './components/Login';
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className="mt-2">
        <h1>Introduccion a TS  React</h1>
        {/*<hr/>
        <TiposBasicos />
        <hr/>
        <ObjetosLiterales />
        <hr/>
        <Funciones />
        <hr/>
        <Contador />
        <hr/>
        <ContadorConHook />
        <hr/>*/}
        {/*<Login />*/}
        {/*<Usuarios />*/}
        <Formularios />
    </div>
  )
}

export default App;