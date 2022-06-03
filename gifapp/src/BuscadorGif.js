import React, {useState} from "react";
import AgregarCategorias from "./componentes/AgregarCategorias";
import PropTypes from 'prop-types';
import { LosGifs } from "./componentes/LosGifs";

export const BuscadorGif = () => {

    //const categorias = ['Talon', 'Katarina', 'Fiora', 'Garen']
    const [categorias, cambiaCategorias] = useState(['Talon'])

    return (
        <>
            <h1>Busca tu Gif</h1>
            <hr />
            <AgregarCategorias cambiaCategorias={cambiaCategorias}/>
            <ol>
                {
                    categorias.map((categoria, i) => {
                       return <LosGifs key={i} categoria={categoria} index={i+1}/>
                    })
                }
            </ol>
        </>
    )

}

AgregarCategorias.propTypes = {
    cambiaCategorias: PropTypes.func.isRequired
}

export default BuscadorGif