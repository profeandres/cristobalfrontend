import React from "react";

export const NoticiaCard = ({ el }) => {
  const { title, subtitle, description, img_main } = el;
  return (
    <a href={`/noticias/` + el._id} className="noticiaCard">
        <img src={img_main.url} alt={subtitle} width="100px" />
        <h3>{title}</h3>
        <p>{description}</p>
        <span href={`/noticias/` + el._id}>[ver más]</span>
    </a>
  );
};
