import React from "react";
import "./reservation.css";
import { FaRegBookmark } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import shapeThree from "../../assets/shape-3.png";

const Reservation = () => {
  return (
    <section className="reservation container " id="reservation">
      <h2 className="section__title" data-title="Reservation">
        Book A Table
      </h2>

      <form className="reservation__form grid">
        <div className="form__input-div">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            name="date"
            placeholder="Date Ex: DD/MM/YY"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            name="time"
            placeholder="Time Ex: 02:30PM"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            name="people"
            placeholder="Number of People"
            className="form__input"
          />
        </div>

        <div className="form__input-div form__input-textarea">
          <textarea
            name="message"
            placeholder="Your Message"
            className="form__input"
          ></textarea>
        </div>

        <button className="btn btn--flex reservation__btn">
          <FaRegBookmark />
          Book A Table
        </button>
      </form>

      <img src={shapeTwo} alt="shape" className="shape__two" />
      <img src={shapeThree} alt="shape" className="shape__three" />
    </section>
  );
};

export default Reservation;
