import React, { useEffect, useState } from 'react'
import { LlamadaGif } from './LlamadaGif'


export const LosGifs = ({categoria, index}) => {
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
      traerGifs()
    }, [])
    

    const traerGifs = async () => {
        //const link = 'https://api.giphy.com/v1/gifs/search?q='+categoria+'&limit=5&api_key=XcDd6kuPadcHurrkbnJZ5Zs067YT5WCg'

        // const info = await fetch(link);
        // const {data} = await info.json()
        // const imagenes = await data.map(img => {
        //     console.log(img)
        //     return{
        //         id: img.id,
        //         title: img.title,
        //         url: img.images.downsized_medium.url
        //     }
        // })

        // setImagenes(imagenes)

        const linkChamps='http://localhost:4000/api/campeones'

        const champs = await fetch(linkChamps)
        const {campeones, ok} = await champs.json()
        // const uwu2 = await uwu.map(champ =>{
        //     console.log(champ)
        // })
        setImagenes(campeones)

    }
    console.log(imagenes)
  return (
    <div>
        <h3>{index} {categoria}</h3>
        {
            // imagenes.map((imagen) => {
            //     return <LlamadaGif key={imagen.id} imagen={imagen}/>
            // })
            imagenes.map(({nombre, _id}) =>{
                return <p key={_id}>{nombre}</p>

            })
        }
    </div>
  )
}

export default LosGifs
