import React from "react"
import ReactDom from "react-dom/client"
import BuscadorGif from "./BuscadorGif"
import './index.css'

const direcRoot = document.querySelector('#root')

const root = ReactDom.createRoot(direcRoot)

root.render( <BuscadorGif categorias/> )