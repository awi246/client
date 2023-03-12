import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { IoMdSchool } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="MY iamge" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoMdSchool className="About__icon" />
              <h5>Education</h5>
            </article>
            <article className="about__card">
              <BsCodeSlash className="About__icon" />
              <h5>Coding Skills</h5>
            </article>
            <article className="about__card">
              <IoMdSchool className="About__icon" />
              <h5>Education</h5>
            </article>
            <article className="about__card">
              <BsAward className="About__icon" />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
            I am a fresher who values qualitative user research and this is
            something where i feel like i can bring a lot to team. Frontend
            developer with a va
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
