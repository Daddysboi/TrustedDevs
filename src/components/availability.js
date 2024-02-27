import React from "react";
import world from "../assets/images/world.png";

const Availability = () => {
  return (
    <div id="availability">
      <div className="availability__subheader__container">
        <div className="line__in"></div>
        <h2 className="availability__subheader">GET TO KNOW ME</h2>
        <div className="line__out"></div>
      </div>

      <h1 className="availability__header">
        <span>Professional Summary </span>{" "}
      </h1>
      <p className="availability__description">
        .....read about me and my availability below
      </p>
      <div className="my__availability">
        <img src={world} alt="upwork" />
        <div>
          <p>
            With over 2 years of experience as a Frontend Engineer, I excel in
            crafting and implementing scalable solutions for enterprise-level
            projects. My expertise lies in developing intricate web applications
            and platforms across a range of industries, including finance,
            marketing, sales, and productivity. I am committed to fostering
            collaboration and prioritizing customer satisfaction, I continuously
            seek opportunities for learning and improvement. My current
            objective is to join a dynamic organization dedicated to growth and
            diversity, where I can contribute my skills to serve a broad
            spectrum of individuals.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact__form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
