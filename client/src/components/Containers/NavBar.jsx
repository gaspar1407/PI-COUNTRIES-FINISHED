import React from "react";
import { NavLink } from "react-router-dom";
import "./estilos/NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <img src="https://gogeticons.com/frontend/web/icons/data/1/3/7/3/0/travel_512.png" />
      </NavLink>
      <div className="div-1">
        <a id="home" href="/inicio/home">
          Home
        </a>
      </div>
      <div className="div-2">
        <NavLink id="activity" to={"/inicio/Activities"}>
          Create Activity
        </NavLink>
      </div>
    </nav>
  );
}
