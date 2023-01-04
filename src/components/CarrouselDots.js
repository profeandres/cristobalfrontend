import React from "react";

const CarrouselDots = ({index, show, setShow }) => {
  return (
    <span
      className={index === show ? "carrousel-dot active" : "carrousel-dot"}
      onClick={() => setShow(index)}
    >{index+1}</span>
  );
};

export default CarrouselDots;
