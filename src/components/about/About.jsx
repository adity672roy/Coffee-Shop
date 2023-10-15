import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import "./about.css";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="about-us" className="about__img" />
        </div>

        <div className="about__content">
          <h2 className="section__title title-left" data-title="About Us">
            Fresh Quality And Organic Tasty Coffee House For You
          </h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            necessitatibus molestias, placeat dolorum cupiditate deserunt
            perspiciatis assumenda voluptatibus, dolores veniam omnis quisquam
            dicta modi consequuntur ab reprehenderit accusamus tempore. Nemo
          </p>

          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              Lorem ipsum dolor sit amet adipisicing.
            </p>
            <p className="about__details-description">
              <FiCheck />
              Lorem ipsum dolor sit amet adipisicing.
            </p>
            <p className="about__details-description">
              <FiCheck />
              Lorem ipsum dolor sit amet adipisicing.
            </p>
          </div>

          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
