import React from "react";
import { offer } from "../../Data";
import "./offer.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Offer = () => {
  return (
    <section className="offer section" id="offer">
      <h3 className="section__title" data-title="offer">
        Special Offer For You
      </h3>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container"
      >
        {offer.map(({ img, title, discount, description }, index) => {
          return (
            <SwiperSlide className="offer__item" key={index}>
              <div className="offer__img-wrapper">
                <img src={img} alt="" className="offer__img" />
              </div>

              <div className="offer__content">
                <h3 className="offer__title">{title}</h3>
                <span className="offer__discount">{discount}</span>

                <p className="offer__description">{description}</p>

                <a href="/" className="btn">
                  Order Now
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Offer;
