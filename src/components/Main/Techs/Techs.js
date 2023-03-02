import "./Techs.css";
import React from "react";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__header">Technologies</div>
      <h2 className="techs__title">7 technologies</h2>
      <p className="techs__about">
        On the web development course, we mastered the technologies that we used
        in the graduation project.
      </p>
      <div className="techs__cards">
        <div className="techs__card">HTML</div>
        <div className="techs__card">CSS</div>
        <div className="techs__card">JS</div>
        <div className="techs__card">React</div>
        <div className="techs__card">Git</div>
        <div className="techs__card">Express.js</div>
        <div className="techs__card">MongoDB</div>
      </div>
    </section>
  );
}
