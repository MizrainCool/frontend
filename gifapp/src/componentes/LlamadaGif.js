import React from 'react'

export const LlamadaGif = ({imagen}) => {
    const { title, url } = imagen

    return (
    <div>
        <p>{title}</p>
        <img src={url}/>
    </div>
  )
}
