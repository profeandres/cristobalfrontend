import React from "react";
import { useParams } from "react-router-dom";
import { useNoticias } from "../context/NoticiasContext";
import {Loader} from '../components/Loader'

export const Noticia = () => {
  const { noticias } = useNoticias();
  const { id } = useParams();
  return <>
  {noticias.length>0 ? <NoticiaSchema map ={noticias.filter((el) => el._id === id)}/> : <Loader/>}
  </>;
};

const NoticiaSchema = ({map}) => {
  
  console.log(map)
  const {title, subtitle, img_main, description} = map[0]
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={img_main.url} alt="" />
      <p>{description}</p>
    </div>
  );
};
