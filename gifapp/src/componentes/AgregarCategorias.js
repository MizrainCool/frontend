import React, { useState } from 'react'

export const AgregarCategorias = ( {cambiaCategorias} ) => {
  
  const [valorCaja, ponerValorEnCaja] =useState('Ingresa una categoria')

  const escritura = (e) => {
      ponerValorEnCaja(e.target.value)
  }

  const enter = (e) => {
      
      e.preventDefault();
      if(valorCaja.trim().length >= 2){
        cambiaCategorias( cat => [...cat, valorCaja])
        ponerValorEnCaja('')
      }
      
  }

    return (
        <form onSubmit={enter}>
    <div>
        <h1>Agregar Categorias</h1>
        <input
            type="text"
            value={ valorCaja }
            onChange={ escritura }
        />
    </div>
    </form>
  )
}
export default AgregarCategorias