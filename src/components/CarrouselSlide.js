import React from "react";

const CarrouselSlide = ({ data, index=0, show, dataLength }) => {
  const { title,subtitle, description, img_main } = data;
  return (
    <div className={index === show ? "mySlide": "mySlideHidden"}>
      <div className="numbertext">{`${index+1} / ${dataLength? dataLength : "?"}`}</div>
      <img src={img_main.url} alt={subtitle} />
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CarrouselSlide;
