import React, { useEffect, useState } from "react";
import { useNoticias } from "../context/NoticiasContext";
import CarrouselDots from "./CarrouselDots";
import CarrouselSlide from "./CarrouselSlide";

const initialSlide = {
  _id:1,
  title: "Noticias en Camino",
  description:
    "Proximamente encontrarás aquí las noticias más actuales sobre nuestra institución, estate atento para no perderte de los más recientes eventos de la institución",
  img_main:
    "https://res.cloudinary.com/dqivhqr2u/image/upload/v1672419292/utilities/proximamente-1_iwlqpp.png",
};

export const Carrousel = () => {
  const { noticias } = useNoticias();
  const [lastNews, setLastNews] = useState([initialSlide]);
  const [show, setShow] = useState(0);
  const plusSlides = (num) => {
    if (num + show === lastNews.length) {
      setShow(0);
    } else if (num + show < 0) {
      setShow(lastNews.length - 1);
    } else {
      setShow(show + num);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    if (noticias.length > 5) {
      let news = noticias.slice(5);
      setLastNews(news);
    } else {
      setLastNews(noticias);
    }
    return () => clearInterval(interval);
  }, [noticias,show]);

  return (
    <>
      {lastNews?<div className="slideshow-container">
        {lastNews===initialSlide ? (
          <CarrouselSlide key={initialSlide._id} data={initialSlide} index={0}/>
        ) : (
          lastNews.map((el) => (
            <CarrouselSlide
              key={el._id}
              index={lastNews.findIndex((object) => {
                return object._id === el._id;
              })}
              dataLength={lastNews.length}
              data={el}
              show={show}
            />
          ))
        )}
        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>

        <div className="carrousel-dots">
          {lastNews.length === 0
            ? ""
            : lastNews.map((el) => (
                <CarrouselDots
                  key={el._id}
                  index={lastNews.findIndex((object) => {
                    return object._id === el._id;
                  })}
                  show={show}
                  setShow={setShow}
                />
              ))}
        </div>
      </div>:""}
    </>
  );
};
