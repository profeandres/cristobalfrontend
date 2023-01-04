import React, { useEffect, useState } from 'react'
import {TiThMenu} from "react-icons/ti"
import {FcSearch} from "react-icons/fc"
import useWindowDimensions from '../hooks/useWindowDimensions'



export const Header = () => {
  const [responsive, setResponsive] = useState("navbar")
  const [toggler, setToggler] = useState("toggler")
  const {width} = useWindowDimensions();
  
  useEffect(() => {
    if(width>600){
      setResponsive("navbar")
      setToggler("toggler")
    }
  }, [width])
  

  const handleResponsive = ()=>{
    if(responsive === "navbar"){
      setResponsive("navbar-responsive")
    }else if(responsive==="navbar-responsive"){
      setResponsive("navbar")
    }
    if(toggler ==="toggler"){
      setToggler("toggler active")
    }else if(toggler==="toggler active"){
      setToggler("toggler")
    }
  }
  
  return (
    <header id="header">
      <div className="logo">
        <img src="https://res.cloudinary.com/dqivhqr2u/image/upload/v1672081077/utilities/Mi_proyecto_f5ghbb.png" alt="cristóbal colón logo" />
        <div className="logo-text">
          INSTITUCIÓN EDUCATIVA CRISTÓBAL COLÓN
        </div>
      </div>
      <button className={toggler} onClick={handleResponsive}>
        <TiThMenu/>
      </button>
      <form className="search-navbar" id='outside' >
          <input type="text" placeholder="Search.." name="search2"/>
          <button type="submit"><FcSearch/></button>
        </form>
      <ul className={responsive}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/noticias">Noticias</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href='/sign-in'>Plataforma</a></li>
        <form className="search-navbar" id="inside" >
          <input type="text" placeholder="Search.." name="search2"/>
          <button type="submit"><FcSearch/></button>
        </form>
      </ul>
    </header>
  )
}
