import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__header">Student</div>
      <div className="aboutme__profile">
        <div className="aboutme__profile-info">
          <h2 className="aboutme__name">Stanislav</h2>
          <p className="aboutme__specialis">
            Front-end developer, 30 years old
          </p>
          <p className="aboutme__bio">
            I like data processing and visualization in web development. I
            strive to create user-friendly interfaces. I read blogs of web
            developers and solve puzzles on Codewars. In my free time, I make my
            pet project through the Twitter API or i'm going outside to make
            some shot witch my fotocamera.
          </p>
          <div className="aboutme__links">
            <p className="aboutme__link">Facebook</p>
            <p className="aboutme__link">Github</p>
          </div>
        </div>
        <div className="aboutme__avatar"></div>
      </div>
    </section>
  );
}
