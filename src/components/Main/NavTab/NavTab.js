import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <a href="#aboutproject" className="navtab__item">
        О проекте
      </a>
      <a href="#techs" className="navtab__item">Технологии</a>
      <a href="#aboutme" className="navtab__item">Студент</a>
    </section>
  );
}

export default NavTab;
