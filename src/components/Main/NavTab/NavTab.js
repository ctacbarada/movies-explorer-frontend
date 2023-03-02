import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <a href="#aboutproject" className="navtab__item">
      About
      </a>
      <a href="#techs" className="navtab__item">Technologies</a>
      <a href="#aboutme" className="navtab__item">Student</a>
    </section>
  );
}

export default NavTab;
