import React from 'react'
import { Outlet } from 'react-router-dom'

export const NoticiasLayOut = () => {
  return (
    <div>
        <div className="main-head">
        <img src="https://res.cloudinary.com/dqivhqr2u/image/upload/v1672596929/utilities/noticias_p8lkow.jpg" alt="noticias-cristobal-colon" />
        <span>NOTICIAS</span>
        </div>
        <Outlet />
    </div>
  )
}
