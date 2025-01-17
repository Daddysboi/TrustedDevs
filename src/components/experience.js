import React from "react";
import fiverr from "../assets/images/fiverr.png";
import upwork from "../assets/images/upwork.png";
import toptal from "../assets/images/toptal.png";

const Experience = () => {
  return (
    <div id="experience">
      <div className="experience__subheader__container">
        <div className="line__in"></div>
        <h2 className="experience__subheader">WHY TRUST</h2>
        <div className="line__out"></div>
      </div>

      <div data-aos="fade-up">
        <h1 className="experience__header">
          <span>Experience</span>
        </h1>
        <p className="experience__description">
          .....delivered high quality projects on A list platforms
        </p>
      </div>

      <div className="my__experiences">
        <img className="fiverr" src={fiverr} alt="fiverr" />
        <img src={upwork} alt="upwork" />
        <img src={toptal} alt="upwork" />
      </div>
    </div>
  );
};

export default Experience;
