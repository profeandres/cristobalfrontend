import React from 'react'
import {Carrousel} from '../components/Carrousel'
import "../styles/Inicio.css"

export const Inicio = () => {
  document.title = "Inicio"
  return (
    <div className='inicio'>
      <Carrousel/>
    </div>
  )
}
