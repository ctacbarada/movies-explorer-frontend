import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutproject" id="aboutproject">
      <p className="aboutproject__title">About</p>
      <div className="aboutproject__card">
        <h3 className="aboutproject__card-title">
          The graduation project included 5 stages
        </h3>
        <h3 className="aboutproject__card-title">
          It took &nbsp;5 weeks to complete the diploma
        </h3>
        <p className="aboutproject__card-text">
          Drawing up a plan, working on the backend, layout, adding
          functionality and final improvements.
        </p>
        <p className="aboutproject__card-text">
          Each stage had a soft and hard deadline that had to be met in order to
          successfully defend.
        </p>
      </div>
      <div className="aboutproject__infographic">
        <div className="aboutproject__infographic-title">1 Week</div>
        <div className="aboutproject__infographic-title">4 Week</div>
        <p className="aboutproject__infographic-text">Back-end</p>
        <p className="aboutproject__infographic-text">Front-end</p>
      </div>
    </section>
  );
}
