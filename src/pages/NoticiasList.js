import React from "react";
import { useNoticias } from "../context/NoticiasContext";
import "../styles/noticias.css";
import { NoticiaCard } from "../components/NoticiaCard";
import { Loader } from "../components/Loader";

export const NoticiasList = () => {
  document.title = "Noticias"
  const { noticias } = useNoticias();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(noticias);
  return (
    <div className="noticias-container">
      <div className="noticias-main">
        {noticias.length>0 ? noticias.map((el, index) => (
          <NoticiaCard el={el}  key={index}/>
          )):<Loader/>}
      </div>
      <div className="noticias-aside">
        <h2>Buscar Noticias</h2>
        <form className="search-noticias" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search.." name="search2" />
          <button type="submit" className="button-7">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};
