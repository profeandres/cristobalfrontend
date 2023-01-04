import React, { createContext, useContext, useState, useEffect } from 'react'
import { getNoticiasRequest } from '../api/noticias'

const noticiaContext = createContext() 

export const useNoticias = ()=>{
    const context = useContext(noticiaContext)
    if(!context) throw new Error("Noticias provider is missing")
    return context
}

export const NoticiasProvider = ({children}) => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    (async () =>{
    const res = await getNoticiasRequest();
      setNoticias(res.data)
    })()
  }, [])
  
    return (
    <noticiaContext.Provider
    value={{noticias}}
    >
      {children}
    </noticiaContext.Provider>
  )
}

export default NoticiasProvider;